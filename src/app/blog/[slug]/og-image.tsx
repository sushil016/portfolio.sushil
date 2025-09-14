import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getNotionPostBySlug } from '@/lib/notion';

export const runtime = 'nodejs';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  let data: any = null;

  if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
    try {
      const res = await getNotionPostBySlug(process.env.NOTION_DATABASE_ID, params.slug);
      if (res?.frontmatter) data = res.frontmatter;
    } catch {}
  }

  if (!data) {
    const postsDir = path.join(process.cwd(), 'content', 'blog');
    const file = path.join(postsDir, `${params.slug}.mdx`);
    const raw = fs.readFileSync(file, 'utf-8');
    const parsed = matter(raw);
    data = parsed.data;
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: '#1E1E2E',
          padding: '64px',
        }}
      >
        <div style={{ fontSize: 52, color: '#CAA6F7', fontWeight: 700, lineHeight: 1.2 }}>
          {data.title}
        </div>
        <div style={{ fontSize: 24, color: '#B3B3C3', marginTop: 12 }}>
          {data.summary}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
