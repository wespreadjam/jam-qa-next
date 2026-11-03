import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export type Post = { slug: string; title: string; description: string; date: string; html: string };

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => getPost(f.replace(/\.md$/, '')))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title),
    description: String(data.description ?? ''),
    date: String(data.date),
    html: marked.parse(content, { async: false }) as string,
  };
}
