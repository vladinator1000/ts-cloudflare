async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Hello, I'm a Cloudflare worker, you made a: ${request.method} request.`)
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})