# Weblynxhive

WebLynxHive digital agency and software house website by Kumail Raza.

## Features

- Animated hero with orbiting service cards
- Six services with photography and portfolio screenshots
- Filterable portfolio with original projects and separate design concepts
- Video sample requests, founder section, and contact form
- Responsive dark and teal design with reduced-motion support

## Local development

Requires Node.js 22.13 or newer and pnpm 11.25.0.

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm dev
```

Open http://localhost:5173

## Build

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

The project uses React, TypeScript, Vinext/Vite, Tailwind CSS and a Cloudflare Worker runtime. The existing Sites hosting configuration is retained in `.openai/hosting.json`.

## Key files

- `app/page.tsx`: homepage content and interactions
- `app/globals.css`: styles and responsive layouts
- `public/`: logo, photography and project screenshots
- `worker/`: runtime entry point

Contact: contact.weblynx.hive@gmail.com

The contact form prepares an email in the visitor's mail app; it does not send mail through a backend service. Review screenshots can be added when supplied.

## Deploy to Render

Create a **Static Site** from this repository, or create a Blueprint using `render.yaml`.

- Branch: `main`
- Root directory: leave blank
- Build command: `corepack enable && pnpm install --frozen-lockfile && pnpm run build:render`
- Publish directory: `out`
- Environment variable: `NODE_VERSION=22.22.0`

`build:render` uses Next.js static export. The existing `build` script remains available for Sites/Cloudflare. No database, backend server or secret environment variables are needed for the current page. The contact form opens the visitor's email application.
