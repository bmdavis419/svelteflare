# svelteflare

_an example of how to use a sveltekit app with cloudflare workers, KV, and R2_

## running this example

# guide

## stuff you need to install

- @sveltejs/adapter-cloudflare (switch out adapter auto in svelte.config.js)
- wrangler

```bash
pnpm add -D @sveltejs/adapter-cloudflare wrangler
```

## files you need to create

- `wrangler.jsonc` (use the one in this repo as an example)

## things you need to create with wrangler

- kv namespace

```bash
pnpm dlx wrangler kv namespace create svelteflare-example
```

- r2 bucket

https://developers.cloudflare.com/r2/get-started/

## scripts to add to your package.json

_see package.json for the scripts i have added_

- `cf-typegen`: generate types for the project
- `deploy`: deploy the project

## types

- run `pnpm run cf-typegen` to generate types for the project
- add the types to your project in `src/app.d.ts`, see this project for an example

## work with cloudflare

You can access the cloudflare services you've created with `event.platform.env`. See this project for examples on how to use KV. R2 works the same way, see the docs for [R2](https://developers.cloudflare.com/r2/get-started/).
