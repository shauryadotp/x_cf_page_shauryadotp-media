export const onRequest: PagesFunction = async () => {
  const res = await fetch(
    "https://media.shauryadotp.me/f/img/favicon/latest.ico",
    { cf: { cacheEverything: true } }
  );

  return new Response(res.body, {
    headers: {
      "content-type": "image/x-icon",
      "cache-control": "public, max-age=3600"
    }
  });
};
