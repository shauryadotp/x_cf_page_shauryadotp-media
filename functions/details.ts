export async function onRequest(ctx) {
  const { request, env } = ctx;
  const url = new URL(request.url);
  url.pathname = "/f/details.yaml";
  const modifiedRequest = new Request(url, request);
  return env.ASSETS.fetch(modifiedRequest);
}
