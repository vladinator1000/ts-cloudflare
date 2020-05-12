async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Hi, I'm Vlady's Cloudflare worker, thank you for sending me a ${request.method} request.`)
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})