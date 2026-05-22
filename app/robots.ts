import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://emberoakevents.com';
  return {
    rules: { userAgent: '*', allow: ['/', '/llms.txt'] },
    sitemap: `${base}/sitemap.xml`,
  };
}
