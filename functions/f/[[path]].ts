export const onRequest: PagesFunction = async (ctx) => {
  const url = new URL(ctx.request.url);

  const path = url.pathname.replace(/^\/f/, "");

  const base = ctx.env.IK_BASE; 
  const ikURL = new URL(base + path);

  url.searchParams.forEach((v, k) => {
    ikURL.searchParams.set(k, v);
  });

  return fetch(ikURL.toString(), {
    cf: { cacheEverything: true }
  });
};
