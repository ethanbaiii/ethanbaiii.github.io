import type { MarkdownInstance } from 'astro';
export interface EditorialFrontmatter {
  id: string;
  title: string;
  role: string;
  meta: string;
  description: string;
  overview: string[];
  hero: { id: string; label: string; caption: string } | null;
  translation?: string;
  page: 'case' | 'prototypes' | 'analysis' | 'audio';
  href: string;
  backHref: string;
  backLabel: string;
}
const modules = import.meta.glob<MarkdownInstance<EditorialFrontmatter>>('../content/current/*.md', { eager: true });
export const documents = Object.fromEntries(Object.values(modules).map(document => [document.frontmatter.id, document]));
