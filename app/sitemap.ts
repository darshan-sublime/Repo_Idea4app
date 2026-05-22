import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://emberoakevents.com';
  return ["/","/about","/contact","/privacy","/terms","/services","/gallery","/packages","/testimonials","/availability"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
