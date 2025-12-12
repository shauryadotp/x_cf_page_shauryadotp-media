export async function onRequest(ctx) {
  const gh = "https://github.com/shauryadotp.png";

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
