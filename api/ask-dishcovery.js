export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    console.error('Missing API key!');
    return res.status(500).json({ error: 'API key not set in environment' });
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'mistralai/mistral-7b-instruct',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('OpenRouter error:', data);
  }

  res.status(response.status).json(data);
}
