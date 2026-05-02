# Proctor.uz Website

Marketing website and download page for `proctoruz-secure-exam`.

## Stack

- Next.js App Router
- TypeScript
- Mantine UI
- next-intl locale routing (`/uz`, `/ru`, `/en`)
- GitHub Releases powered download metadata

## Development

```bash
pnpm install
pnpm dev
```

## Download configuration

Set `GITHUB_RELEASE_REPO` to the release repository in `owner/name` format.
If it is omitted, the website uses `proctoruz/proctoruz-secure-exam`.
