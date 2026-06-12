# Agent Notes for This Website

This repository is Md Atik Enam's AcademicPages/Jekyll personal website.

## Main Editing Areas

- Site-wide visual styling lives in `_sass/_site-modern.scss`.
- Portfolio case-study styling lives in `_sass/_case-study.scss`.
- Portfolio index page lives in `_pages/portfolio.html`.
- Portfolio case studies live in `_portfolio/`.
- Portfolio images live in `images/portfolio/`.
- Navigation is controlled by `_data/navigation.yml`.

## Local Build and Preview

Use the Windows command wrappers from the repository root:

```powershell
.\scripts\build-local.cmd
.\scripts\serve-local.cmd
```

The local preview URL is:

```text
http://127.0.0.1:4000/
```

This site uses a local Ruby gem install under `local\bundle\ruby\3.3.0`. The helper scripts set `GEM_HOME`, `GEM_PATH`, and `JEKYLL_ENV=development` before running Jekyll. The `.cmd` wrappers avoid PowerShell execution-policy blocks.

## Important Local Preview Detail

`_includes/base_path` intentionally uses local, site-relative URLs in development. This keeps local CSS, JavaScript, thumbnails, and images visible before they are pushed to GitHub Pages. Production builds can still use `site.url`.

## Verification Checklist

After changing content or styles:

```powershell
.\scripts\build-local.cmd
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:4000/portfolio/ | Select-Object -ExpandProperty StatusCode
git diff --check
```

Expected: Jekyll build succeeds, route returns `200`, and `git diff --check` has no whitespace errors other than possible Windows line-ending warnings.

## GitHub Pages Reminder

Local changes are not visible on `https://md-atik-enam.github.io/` until they are committed and pushed to `origin/master`.
