# Nuxt3 starter for cn dev

# Introduction

we use tech stack:
1. Nuxt3
2. Element Plus
3. Tailwind CSS
4. nuxt-gtag for Google Analytics
5. @nuxtjs/sitemap for sitemap
6. @nuxtjs/i18n for i18n


## Setup

Make sure to install the dependencies

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`

```bash
pnpm dev
```

More info about [nuxt deployment](https://nuxt.com/docs/getting-started/deployment#presets).

Run `npm run generate` to generate static html in `.output/public`.

## Production

Build the application for production:

```bash
pnpm build
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Deploy

You need set `NITRO_PRESET=vercel-edge`, see [Nuxt on Vercel](https://vercel.com/docs/frameworks/nuxt#edge-functions).

## Ref

- [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3)
