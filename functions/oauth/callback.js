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

  const data = await response.json();

  if (data.error || !data.access_token) {
    return new Response(
      `<!doctype html><html><body><script>
        window.opener && window.opener.postMessage("authorization:github:error:" + ${JSON.stringify(JSON.stringify(data))}, "*");
        window.close();
      </script></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  const payload = JSON.stringify({ token: data.access_token, provider: 'github' });

  return new Response(
    `<!doctype html><html><body><script>
      window.opener && window.opener.postMessage("authorization:github:success:" + ${JSON.stringify(payload)}, "*");
      window.close();
    </script></body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
