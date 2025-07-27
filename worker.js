export default {
  async fetch(request, env, ctx) {
    // Try to serve any file that matches the request:
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) return assetResponse;

    // Fallback (optional):     / → /index.html
    const url = new URL(request.url);
    url.pathname = "/index.html";
    return env.ASSETS.fetch(new Request(url, request));
  }
}

