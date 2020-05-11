# Quickstart

Make sure you have Node and [Wrangler](https://github.com/cloudflare/wrangler) installed 

1. Set your project and account info in `wrangler.toml`


2. Install dependencies
```sh
yarn
```

2. Build the project
```sh
 yarn build
```

3. Start the dev server (you'll need to rebuild if you change it cause wrangler is coupled to webpack 😭)
```sh
yarn dev
```

4. Once you're happy with your app, publish it using your api key (log into Cloudflare and go to the "workers" dashboard to find it)
```sh
CF_API_KEY=yourkey wrangler publish
```