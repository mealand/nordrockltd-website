<?php
/**
 * NordRock contact form endpoint (cPanel / PHP 8+).
 *
 * Receives the contact form as JSON (POST), validates it, rejects bots and
 * floods, and emails it to the company inbox with PHP's mail(). Responds with
 * JSON: { "ok": true } or { "ok": false, "error": "...", "fields": {...} }.
 *
 * FROM_ADDRESS must be an address on the site's own domain (it can be one that
 * doesn't receive mail) so the host's mail server accepts and signs it.
 */

declare(strict_types=1);

const TO_ADDRESS = 'contact@nordrockltd.com';
const FROM_ADDRESS = 'no-reply@nordrockltd.com';
const FROM_NAME = 'NordRock Website';
const RATE_LIMIT = 5;            // submissions…
const RATE_WINDOW = 3600;        // …per IP per hour
const MIN_FILL_MS = 3000;        // humans take longer than this to fill the form

const ENQUIRIES = [
    'general' => 'General enquiry',
    'investor' => 'Investor relations',
    'partnership' => 'Partnership & supply',
    'media' => 'Media',
    'careers' => 'Careers',
    'artisan' => 'Artisans & cooperatives',
];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/** Collapses whitespace and strips control characters (incl. CR/LF, so no header injection). */
function clean_line(mixed $value, int $max): string
{
    $s = is_string($value) ? $value : '';
    $s = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $s) ?? '';
    $s = trim(preg_replace('/\s+/u', ' ', $s) ?? '');
    return mb_substr($s, 0, $max);
}

function clean_text(mixed $value, int $max): string
{
    $s = is_string($value) ? $value : '';
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $s) ?? '';
    return mb_substr(trim($s), 0, $max);
}

// ---- Method and origin -------------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Only accept submissions from this site's own pages.
$host = strtolower($_SERVER['HTTP_HOST'] ?? '');
$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
$originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
$hostOnly = preg_replace('/:\d+$/', '', $host);
if ($originHost === '' || $originHost !== $hostOnly) {
    respond(403, ['ok' => false, 'error' => 'Forbidden.']);
}

// ---- Parse --------------------------------------------------------------------

$raw = file_get_contents('php://input', false, null, 0, 20000) ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request.']);
}

// Honeypot and timing: pretend success so bots learn nothing.
if (!empty($data['website']) || (int) ($data['elapsed'] ?? 0) < MIN_FILL_MS) {
    respond(200, ['ok' => true]);
}

// ---- Rate limit ---------------------------------------------------------------

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'nordrock-contact';
if (!is_dir($dir)) {
    @mkdir($dir, 0700, true);
}
$bucket = $dir . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_file($bucket)) {
    $hits = json_decode((string) file_get_contents($bucket), true) ?: [];
    $hits = array_values(array_filter($hits, fn($t) => is_int($t) && $t > $now - RATE_WINDOW));
}
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['ok' => false, 'error' => 'Too many messages. Please try again later or email us directly.']);
}

// ---- Validate -----------------------------------------------------------------

$name = clean_line($data['name'] ?? '', 100);
$email = clean_line($data['email'] ?? '', 254);
$organisation = clean_line($data['organisation'] ?? '', 150);
$phone = clean_line($data['phone'] ?? '', 40);
$enquiry = clean_line($data['enquiry'] ?? '', 20);
$message = clean_text($data['message'] ?? '', 5000);
$consent = ($data['consent'] ?? false) === true;

$errors = [];
if (mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}
if ($phone !== '' && !preg_match('/^[0-9+()\-.\s]{6,40}$/', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if (!array_key_exists($enquiry, ENQUIRIES)) {
    $errors['enquiry'] = 'Please choose an enquiry type.';
}
if (mb_strlen($message) < 10) {
    $errors['message'] = 'Please tell us a little more (at least 10 characters).';
}
if (!$consent) {
    $errors['consent'] = 'Please confirm we may use your details to reply.';
}
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Please check the highlighted fields.', 'fields' => $errors]);
}

// ---- Send ---------------------------------------------------------------------

$subject = sprintf('[%s] %s — %s', ENQUIRIES[$enquiry], $name, $organisation !== '' ? $organisation : 'nordrockltd.com');
$body = implode("\n", [
    'New message from the NordRock website contact form.',
    '',
    'Enquiry:      ' . ENQUIRIES[$enquiry],
    'Name:         ' . $name,
    'Email:        ' . $email,
    'Organisation: ' . ($organisation !== '' ? $organisation : '—'),
    'Phone:        ' . ($phone !== '' ? $phone : '—'),
    '',
    'Message:',
    $message,
    '',
    '—',
    'Sent ' . gmdate('Y-m-d H:i') . ' UTC from ' . $hostOnly,
]);

$headers = [
    'From' => sprintf('%s <%s>', mb_encode_mimeheader(FROM_NAME, 'UTF-8'), FROM_ADDRESS),
    'Reply-To' => sprintf('%s <%s>', mb_encode_mimeheader($name, 'UTF-8'), $email),
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => '8bit',
    'X-Mailer' => 'NordRock website',
];

$sent = @mail(
    TO_ADDRESS,
    mb_encode_mimeheader($subject, 'UTF-8'),
    $body,
    $headers,
    '-f' . FROM_ADDRESS,
);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'We couldn\'t send your message right now. Please email us directly.']);
}

$hits[] = $now;
@file_put_contents($bucket, json_encode($hits), LOCK_EX);

respond(200, ['ok' => true]);
