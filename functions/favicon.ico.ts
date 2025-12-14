export async function onRequest(ctx) {
  const gh = "/f/img/favicon/latest.ico";

  const res = await fetch(gh, {
    cf: { cacheEverything: true }
  });

  return new Response(res.body, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=3600"
    }
  });
}
