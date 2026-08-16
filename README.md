# Finite Machines landing page

A production-oriented landing page for Finite Machines, built with Next.js, React, and strict TypeScript. The page is statically rendered and includes responsive product demonstrations, accessible interaction, security headers, SEO metadata, a sitemap, robots configuration, and Playwright browser tests.

## Local development

Requires Node.js 20.9 or newer and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

## Configuration

- `NEXT_PUBLIC_SITE_URL` controls canonical metadata, `robots.txt`, and `sitemap.xml`.
- `NEXT_PUBLIC_CONTACT_EMAIL` controls the destination used by the pilot request form.

The form intentionally prepares an email in the visitor's email client. This keeps the initial site operational without collecting or storing personal data. It can later be replaced with a validated server action connected to an approved CRM or email provider.

## Deployment

Deploy to any Next.js-compatible Node host. Vercel requires no special configuration. Set the two environment variables above in the deployment environment and run `pnpm build` as the production build command.
