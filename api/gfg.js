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
    
    // Ensure we have a proper structure by checking the data format
    if (data && data.info && data.solvedStats) {
      // Keep the structure but ensure all required properties exist
      const processedData = {
        info: {
          userName: data.info.userName || 'govinddwivedi',
          fullName: data.info.fullName || '',
          profilePicture: data.info.profilePicture || '',
          institute: data.info.institute || '',
          instituteRank: data.info.instituteRank || 'N/A',
          currentStreak: data.info.currentStreak || 0,
          maxStreak: data.info.maxStreak || 0,
          totalProblemsSolved: data.info.totalProblemsSolved || 0
        },
        solvedStats: {
          school: { count: data.solvedStats.school?.count || 0 },
          basic: { count: data.solvedStats.basic?.count || 0 },
          easy: { count: data.solvedStats.easy?.count || 0 },
          medium: { count: data.solvedStats.medium?.count || 0 },
          hard: { count: data.solvedStats.hard?.count || 0 }
        }
      };
      
      return res.status(200).json(processedData);
    } else {
      throw new Error('Invalid data structure from GFG API');
    }
  } catch (error) {
    console.error('GFG API Proxy Error:', error);
    
    // Return a fallback object with default values
    return res.status(200).json({
      info: {
        userName: 'govinddwivedi',
        fullName: 'GOVIND DWIVEDI',
        profilePicture: '',
        institute: 'Indian Institute of Information Technology Design and Manufacturing (IIITDM) Jabalpur',
        instituteRank: 65,
        currentStreak: 246,
        maxStreak: 1385,
        totalProblemsSolved: 434
      },
      solvedStats: {
        school: { count: 0 },
        basic: { count: 27 },
        easy: { count: 149 },
        medium: { count: 220 },
        hard: { count: 38 }
      }
    });
  }
}
