import type { Metadata } from 'next';
import { getAllPosts, getPost } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <p><time>{post.date}</time></p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
