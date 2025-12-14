export const onRequest: PagesFunction = async () => {
  const res = await fetch("/f/details.yaml", {
    cf: { cacheEverything: false }
  });

  if (!res.ok) {
    return new Response("details.yaml unavailable", { status: 502 });
  }

  return new Response(res.body, {
    headers: {
      "content-type": "text/yaml; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate",
      "pragma": "no-cache",
      "expires": "0",
      "access-control-allow-origin": "*"
    }
  });
};
