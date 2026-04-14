import type { MetadataRoute } from 'next';

const SITE_URL = 'https://adi-makes.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
