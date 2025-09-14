import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { getNotionDatabasePosts } from '@/lib/notion';

interface Frontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  readingTime: number;
  author: string;
  featured?: boolean;
  coverImage?: string;
}

export const metadata = {
  title: 'Blog | Sushil Sahani',
  description: 'Stories, projects, and insights from my journey as a DevOps engineer, entrepreneur, and student leader.',
};

const postsDir = path.join(process.cwd(), 'content', 'blog');

export default async function Blog() {
  let posts: Frontmatter[] = [];

  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    try {
      posts = await getNotionDatabasePosts(process.env.NOTION_DATABASE_ID);
    } catch (e) {
      // fallback to MDX if Notion fails
    }
  }

  if (!posts.length) {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
    posts = files.map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
      const { data } = matter(raw);
      return data as Frontmatter;
    });
  }

  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="bg-[#1E1E2E] min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#CAA6F7]">My Journey & Learnings</h1>
          <p className="text-xl text-[#B3B3C3] max-w-3xl mx-auto leading-relaxed mt-4">
            Stories, projects, and insights from my path as a DevOps engineer, entrepreneur, and student leader.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {featured.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-[#CAA6F7] mb-6">Featured Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featured.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-2xl overflow-hidden border border-[#3A3A4E] hover:border-[#CAA6F7] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#CAA6F7]/10">
                    <article className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#CAA6F7]/20 text-[#CAA6F7]">Featured</span>
                        <span className="text-[#B3B3C3] text-sm">{formatDistanceToNow(new Date(p.date), { addSuffix: true })}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#CAA6F7] mb-3 group-hover:text-[#06B6D4]">{p.title}</h3>
                      <p className="text-[#B3B3C3]">{p.summary}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </>
          )}

          <h2 className="text-3xl font-bold text-[#CAA6F7] mt-12 mb-6">All Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-xl p-6 border border-[#3A3A4E] hover:border-[#CAA6F7] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#CAA6F7]/5">
                <article>
                  <h3 className="text-xl font-bold text-[#CAA6F7] mb-2 group-hover:text-[#06B6D4]">{p.title}</h3>
                  <p className="text-[#B3B3C3] mb-3">{p.summary}</p>
                  <div className="text-sm text-[#B3B3C3]">{p.readingTime} min • {formatDistanceToNow(new Date(p.date), { addSuffix: true })}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
