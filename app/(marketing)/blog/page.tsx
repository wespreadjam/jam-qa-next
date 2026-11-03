import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = { title: 'Blog', description: 'Guides on uptime, cron and incident response.' };

export default function Blog() {
  const posts = getAllPosts();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}><Link href={`/blog/${p.slug}/`}>{p.title}</Link></li>
        ))}
      </ul>
    </>
  );
}
