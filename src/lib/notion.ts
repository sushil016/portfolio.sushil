import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
export const n2m = new NotionToMarkdown({ notionClient: notion });

// Normalize a Notion page into our blog frontmatter shape
function toFrontmatter(page: any) {
  const props = page.properties;
  return {
    id: page.id,
    title: props.Title?.title?.[0]?.plain_text || 'Untitled',
    slug: props.Slug?.rich_text?.[0]?.plain_text || page.id,
    date: props.Date?.date?.start || new Date().toISOString(),
    category: props.Category?.select?.name || 'growth',
    tags: (props.Tags?.multi_select || []).map((t: any) => t.name),
    summary: props.Summary?.rich_text?.[0]?.plain_text || '',
    readingTime: props.ReadTime?.number || 5,
    author: props.Author?.people?.[0]?.name || 'Sushil Sahani',
    featured: props.Featured?.checkbox || false,
    coverImage: page.cover?.external?.url || page.cover?.file?.url || undefined,
  } as const;
}

export async function getNotionDatabasePosts(databaseId: string) {
  const res = await (notion.databases as any).query({
    database_id: databaseId,
    filter: { property: 'Published', checkbox: { equals: true } },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });

  return res.results.map((page: any) => toFrontmatter(page));
}

export async function getNotionPostBySlug(databaseId: string, slug: string) {
  const res = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      and: [
        { property: 'Published', checkbox: { equals: true } },
        { property: 'Slug', rich_text: { equals: slug } },
      ],
    },
    page_size: 1,
  });

  const page = res.results?.[0];
  if (!page) return null;
  const fm = toFrontmatter(page);
  return { frontmatter: fm, pageId: page.id };
}

export async function getNotionPostContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}
