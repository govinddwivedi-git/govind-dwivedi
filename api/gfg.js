export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Fetch data from the GFG API
    const response = await fetch('https://geeks-for-geeks-api.vercel.app/govinddwivedi');
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Return the data to the client
    return res.status(200).json(data);
  } catch (error) {
    console.error('GFG API Proxy Error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch data from GeeksForGeeks API',
      message: error.message 
    });
  }
}
