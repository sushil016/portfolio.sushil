import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Eye } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { getNotionDatabasePosts, getNotionPostBySlug, getNotionPostContent } from '@/lib/notion';
import { notFound } from 'next/navigation';

interface BlogPostDetailProps {
  params: { slug: string };
}

const postsDir = path.join(process.cwd(), 'content', 'blog');

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  const mdxSlugs = files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));

  // Include Notion slugs if configured
  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    try {
      const notionPosts = await getNotionDatabasePosts(process.env.NOTION_DATABASE_ID);
      const notionSlugs = notionPosts.map((p: any) => ({ slug: p.slug }));
      return [...mdxSlugs, ...notionSlugs];
    } catch {
      // ignore and fallback to MDX only
    }
  }

  return mdxSlugs;
}

export async function generateMetadata({ params }: BlogPostDetailProps) {
  // Prefer Notion if configured
  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    try {
      const res = await getNotionPostBySlug(process.env.NOTION_DATABASE_ID, params.slug);
      if (res?.frontmatter) {
        const data: any = res.frontmatter;
        return {
          title: `${data.title} | Sushil Sahani`,
          description: data.summary,
          openGraph: { title: data.title, description: data.summary, images: [`/blog/${params.slug}/og-image`] },
          twitter: { card: 'summary_large_image', title: data.title, description: data.summary, images: [`/blog/${params.slug}/og-image`] },
        } as any;
      }
    } catch {}
  }

  // Fallback to MDX
  const file = path.join(postsDir, `${params.slug}.mdx`);
  if (fs.existsSync(file)) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { data } = matter(raw);
    return {
      title: `${data.title} | Sushil Sahani`,
      description: data.summary,
      openGraph: { title: data.title, description: data.summary, images: [`/blog/${params.slug}/og-image`] },
      twitter: { card: 'summary_large_image', title: data.title, description: data.summary, images: [`/blog/${params.slug}/og-image`] },
    } as any;
  }

  // Default metadata if not found (will 404 in page)
  return {
    title: `Post | Sushil Sahani`,
    description: 'Blog post',
  } as any;
}

async function getPost(slug: string) {
  // Try Notion first if available
  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    try {
      const res = await getNotionPostBySlug(process.env.NOTION_DATABASE_ID, slug);
      if (res) {
        const md = await getNotionPostContent(res.pageId);
        return { content: md, frontmatter: res.frontmatter as any };
      }
    } catch {}
  }

  // Fallback to MDX file
  const file = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf-8');
  const { content, data } = matter(raw);
  return { content, frontmatter: data as any };
}

export default async function BlogPostDetail({ params }: BlogPostDetailProps) {
  const res = await getPost(params.slug);
  if (!res) return notFound();
  const { content, frontmatter } = res;

  return (
    <div className="bg-[#1E1E2E] min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/blog">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2A2A3E] to-[#1A1A2E] border border-[#3A3A4E] rounded-full text-[#CAA6F7] hover:border-[#CAA6F7] hover:text-[#06B6D4] transition-all duration-300 hover:scale-105">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Blog</span>
          </button>
        </Link>
      </div>

      <article className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#CAA6F7] mb-6 leading-tight">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#B3B3C3] mb-6">
              <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{frontmatter.author}</span></div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{formatDistanceToNow(new Date(frontmatter.date), { addSuffix: true })}</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{frontmatter.readingTime} min read</span></div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4" /><span>— views</span></div>
            </div>

            {frontmatter.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-[#CAA6F7]/20 text-[#CAA6F7] rounded-full text-sm">#{tag}</span>
                ))}
              </div>
            ) : null}
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={content} />
          </div>

          <footer className="mt-12 pt-8 border-t border-[#3A3A4E]">
            <div className="flex items-center justify-between">
              <div className="text-[#B3B3C3]"><p>Thanks for reading! 🚀</p></div>
              <Link href="/blog">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#CAA6F7] text-[#1E1E2E] rounded-lg hover:bg-[#06B6D4] transition-colors">
                  More Posts
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </button>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
