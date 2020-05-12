# Quickstart

Make sure you have Node and [Wrangler](https://github.com/cloudflare/wrangler) installed 

1. Set your project and account info in `wrangler.toml`


2. Install dependencies
```sh
npm install
```

2. Build the project
```sh
 yarn build
```

3. Develop your app
```sh
yarn dev
```

4. Publish it using your api key (log into Cloudflare and go to the "workers" dashboard to find it)
```sh
CF_API_KEY=yourkey wrangler publish
```