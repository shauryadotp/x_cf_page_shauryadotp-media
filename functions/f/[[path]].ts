export const onRequest: PagesFunction = async (ctx) => {
  const url = new URL(ctx.request.url);

  // remove /f from path
  const path = url.pathname.replace(/^\/f/, "");

  // Get ImageKit base URL from secret
  const base = ctx.env.IK_BASE;  
  const ikURL = base + path;

  const resp = await fetch(ikURL, {
    cf: { cacheEverything: true },
  });

  return resp;
};
