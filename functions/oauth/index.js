export async function onRequest({ request, env }) {
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: new URL('/oauth/callback', request.url).href,
  });

  return Response.redirect(
    `https://github.com/login/oauth/authorize?${params}`,
    302
  );
}
