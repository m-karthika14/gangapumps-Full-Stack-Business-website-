import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const PUBLIC_DIR = path.join(ROOT, 'public');
const API_URL = process.env.API_URL || 'http://localhost:5000/api/products';

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

async function readPages() {
  const files = await fs.readdir(PAGES_DIR);
  const routes = [];

  for (const f of files) {
    if (!f.endsWith('.tsx') && !f.endsWith('.jsx') && !f.endsWith('.js')) continue;
    const name = f.replace(/\.(tsx|jsx|js)$/, '');
    if (name === 'Home') routes.push('/');
    else if (name === 'Products') routes.push('/products');
    else if (name === 'ProductDetail') continue; // product detail pages created from product list
    else routes.push('/' + slugify(name));
  }
  return routes;
}

async function fetchProducts() {
  try {
    const res = await axios.get(API_URL, { timeout: 3000 });
    if (!Array.isArray(res.data)) return [];
    return res.data.map(p => {
      const slug = p.slug || p.urlSlug || (p.name ? slugify(p.name) : p._id || 'product');
      return { loc: `/product/${slug}`, lastmod: p.updatedAt || p.createdAt || null };
    });
  } catch (err) {
    console.warn('Could not fetch products from API (%s). Falling back to static pages.', API_URL);
    return [];
  }
}

function buildXml(entries) {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const footer = '</urlset>\n';
  const body = entries.map(e => {
    const lastmod = e.lastmod ? `\n    <lastmod>${new Date(e.lastmod).toISOString().split('T')[0]}</lastmod>` : '';
    const changefreq = e.changefreq ? `\n    <changefreq>${e.changefreq}</changefreq>` : '';
    const priority = e.priority ? `\n    <priority>${e.priority}</priority>` : '';
    return `  <url>\n    <loc>https://www.gangapumps.com${e.loc}</loc>${lastmod}${changefreq}${priority}\n  </url>`;
  }).join('\n');
  return header + body + '\n' + footer;
}

async function main() {
  const pages = await readPages();

  const staticEntries = pages.map(p => ({ loc: p, changefreq: 'weekly', priority: p === '/' ? '1.0' : '0.7', lastmod: new Date().toISOString().split('T')[0] }));

  const products = await fetchProducts();
  const productEntries = products.map(p => ({ loc: p.loc, lastmod: p.lastmod, changefreq: 'monthly', priority: '0.6' }));

  const entries = [
    ...staticEntries,
    ...productEntries
  ];

  const xml = buildXml(entries);
  await fs.writeFile(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
  await fs.writeFile(path.join(PUBLIC_DIR, 'sitemap-optimized.xml'), xml, 'utf8');
  console.log('Sitemap written to public/sitemap.xml and public/sitemap-optimized.xml —', entries.length, 'urls');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
