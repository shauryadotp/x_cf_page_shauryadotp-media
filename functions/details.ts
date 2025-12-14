export const onRequest: PagesFunction = async () => {
  const res = await fetch("https://media.shauryadotp.me/f/details.yaml");

  if (!res.ok) {
    return new Response("details.yaml unavailable", { status: 502 });
  }

  return new Response(res.body, {
    headers: {
      "content-type": "text/yaml; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*"
    }
  });
};
