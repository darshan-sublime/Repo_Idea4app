import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('keyword') || 'business';
  
  try {
    const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=20`);
    if (!res.ok) throw new Error('Unsplash NAPI failed');
    const data = await res.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('No results found');
    }

    const results = data.results;
    // Deterministic selection based on keyword hash
    const hash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const startIndex = hash % results.length;

    for (let i = 0; i < Math.min(results.length, 5); i++) {
      const resultIndex = (startIndex + i) % results.length;
      const fullUrl = results[resultIndex].urls.regular;
      const baseUrl = fullUrl.split('?')[0];
      const imageUrl = `${baseUrl}?auto=format&fit=crop&q=80&w=800`;
      
      const checkRes = await fetch(imageUrl, { method: 'HEAD' });
      if (checkRes.ok) {
        const response = NextResponse.redirect(imageUrl);
        // Cache the redirect for 7 days
        response.headers.set('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
        return response;
      }
    }
    
    throw new Error('No valid images found in results');
  } catch (error) {
    const fallbackUrl = `https://loremflickr.com/800/600/${encodeURIComponent(query)}`;
    const response = NextResponse.redirect(fallbackUrl);
    response.headers.set('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
    return response;
  }
}
