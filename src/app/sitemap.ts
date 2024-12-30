import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leveledapp.com';
  
  // Add all your static pages here
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/terms',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add your dynamic pages here (e.g., blog posts)
  // const posts = await getPosts();
  // const blogRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }));

  return [
    ...routes,
    // ...blogRoutes, // Uncomment when you have blog posts
  ];
} 