# Deploying to newsite.nordrockltd.com

The site deploys automatically from GitHub. Every push to `main` runs
[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which type-checks, lints and
builds the static export, then uploads `out/` to cPanel over FTPS. After the first full upload
(about 40 MB, ~350 files) only changed files are sent.

Until the FTP secrets below exist, the workflow still builds and checks every push but skips the
upload with a "Deploy skipped" notice — nothing fails.

## One-time setup

### 1. cPanel: create the subdomain

1. **Domains** (or **Subdomains** on older cPanel) → **Create a New Domain**.
2. Domain: `newsite.nordrockltd.com`. Note the **document root** cPanel proposes, e.g.
   `/home/<cpanel-user>/newsite.nordrockltd.com`. Leave "Share document root" unticked.

### 2. cPanel: enable HTTPS for the subdomain

**SSL/TLS Status** → tick `newsite.nordrockltd.com` → **Run AutoSSL**. The site forces HTTPS, so
wait until the certificate shows as active before the first deploy.

### 3. cPanel: create an FTP account just for deployments

1. **FTP Accounts** → **Add FTP Account**.
2. Log in: e.g. `deploy` (the full username becomes `deploy@nordrockltd.com`).
3. Password: generate a strong one and keep it for step 4.
4. **Directory: set it to exactly the subdomain's document root** from step 1 (for example
   `newsite.nordrockltd.com`), so this account can only write to the review site.
5. Open **Configure FTP Client** next to the new account and note the **FTP server** hostname
   and port (usually `ftp.nordrockltd.com`, port 21).

### 4. GitHub: add the secrets

Repository → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret         | Value                                                |
| -------------- | ---------------------------------------------------- |
| `FTP_SERVER`   | FTP server from step 3.5, e.g. `ftp.nordrockltd.com` |
| `FTP_USERNAME` | full FTP username, e.g. `deploy@nordrockltd.com`     |
| `FTP_PASSWORD` | the password from step 3.3                           |

Optional **variables** (same page, **Variables** tab) — only if the defaults don't fit:

| Variable                     | Default | When to change                                                                                                 |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `FTP_SERVER_DIR`             | `./`    | If the FTP account's home is not the subdomain root, e.g. `newsite.nordrockltd.com/` (keep the trailing slash) |
| `FTP_PROTOCOL`               | `ftps`  | `ftp` only if the host has no FTPS; `ftps-legacy` for implicit FTPS on port 990                                |
| `NEXT_PUBLIC_ALLOW_INDEXING` | unset   | Set to `true` only for the main-domain launch                                                                  |

### 5. Run the first deploy

**Actions → Build and deploy → Run workflow** (branch `main`), or push any commit. When the run
is green, open https://newsite.nordrockltd.com.

## Contact form

The form on `/contact/` posts to `public/api/contact.php`, which runs on the cPanel host's PHP and
emails each message to `contact@nordrockltd.com` (reply-to is set to the sender).

1. In cPanel **Email Accounts**, make sure `contact@nordrockltd.com` exists, and create
   `no-reply@nordrockltd.com` (the sender address; it doesn't need to be read).
2. In **Email Deliverability**, confirm SPF and DKIM show as valid for `nordrockltd.com` so
   messages don't land in spam.
3. After the first deploy, send a test message from the live form.

The endpoint rejects cross-site posts, silently drops bots (honeypot field and a minimum fill
time), and limits each IP to 5 messages an hour. Addresses and limits are constants at the top of
`contact.php`.

## Search engines

The review site is kept out of search results three ways: a `noindex` meta tag on every page, a
`robots.txt` that disallows everything, and an `X-Robots-Tag` header sent only for the `newsite.`
host (see `public/.htaccess`).

## Troubleshooting

- **TLS / certificate errors in the deploy step** — use the server hostname shown in cPanel's
  _Configure FTP Client_ (some hosts' certificates don't cover `ftp.yourdomain`), or set
  `FTP_PROTOCOL` as above.
- **Login failed** — `FTP_USERNAME` must be the full `user@domain` form.
- **Files land in the wrong folder** — the FTP account's directory must be the subdomain's
  document root, or set `FTP_SERVER_DIR`.
- **A deploy left the server in a bad state** — re-run the workflow. To force a full re-upload,
  delete `.ftp-deploy-sync-state.json` from the subdomain folder in cPanel's File Manager first.
- **Pages 404 without a trailing slash, or the custom 404 page doesn't show** — check that the
  host allows `.htaccess` overrides (some LiteSpeed setups ignore `<If>` blocks; the site still
  works, only cache/robots headers are affected).

## Moving to nordrockltd.com later

1. Back up the current WordPress site (cPanel **Backup** or the host's tool).
2. Point the FTP account (or `FTP_SERVER_DIR`) at the main domain's document root.
3. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` and re-run the workflow.
4. Add redirects for any old WordPress URLs worth keeping to `public/.htaccess`.
