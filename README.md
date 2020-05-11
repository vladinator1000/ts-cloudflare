# Quickstart

1. Set your project and account info in `wrangler.toml`


2. Install dependencies
```sh
yarn
```

2. Build the project
```sh
 yarn build
```

3. Publish using your api key (log into Cloudflare and go to workers to find it)
```sh
CF_API_KEY=yourkey wrangler publish
```