export async function onRequest({ request, env }) {
  const code = new URL(request.url).searchParams.get('code');

  if (!code) {
    return new Response(JSON.stringify({ error: 'no code param' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

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

  const data = await response.json();

  // Return raw response for debugging — remove this file after diagnosing
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
