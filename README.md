# Quickstart

Make sure you have Node and [Wrangler](https://github.com/cloudflare/wrangler) installed 

1. [Configure](https://developers.cloudflare.com/workers/quickstart#configure) your project in `wrangler.toml`

2. Install dependencies
```sh
npm install
```

3. Develop your app
```sh
yarn dev
```

4. Publish it using your api key (log into Cloudflare and go to the "workers" dashboard to find it)
```sh
CF_API_KEY=yourkey wrangler publish
```