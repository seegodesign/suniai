export async function onRequest({ request, env }) {
  const code = new URL(request.url).searchParams.get('code');

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const { access_token, error } = await response.json();

  const content = error
    ? `<script>window.opener.postMessage('error', '*')</script>`
    : `<script>window.opener.postMessage('authorization:github:success:${JSON.stringify({ token: access_token, provider: 'github' })}', '*')</script>`;

  return new Response(content, { headers: { 'Content-Type': 'text/html' } });
}
