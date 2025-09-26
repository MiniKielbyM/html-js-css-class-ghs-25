// testHeadlines.js
const API_KEY = '2cbafc3e9e8a4f65a9294c8df947483c';

async function getTopQuebecHeadlines() {
  try {
    const url = new URL('https://newsapi.org/v2/top-headlines');
    url.searchParams.set('country', 'ca');
    url.searchParams.set('pageSize', '20');
    url.searchParams.set('apiKey', API_KEY);
    url.searchParams.set('language', 'fr');

    const res = await fetch(url.toString()); // built-in fetch
    const data = await res.json();

    if (data.status !== 'ok') {
      console.error('Error fetching news:', data);
      return [];
    }

    return data.articles;
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
}

getTopQuebecHeadlines().then(articles => {
  console.log('Québec headlines:');
  for (const art of articles) {
    console.log('-', art.title, '(', art.source.name, ')');
  }
});
