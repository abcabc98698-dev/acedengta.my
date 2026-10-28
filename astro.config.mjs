import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://acedengta.my';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  envPrefix: 'PUBLIC_',
  redirects: {
    '/signin': '/sign-in',
    '/signup': '/sign-up',
    '/blog/iepl-vless-network-architecture-guide': '/blog/vless-iepl-architecture-analysis',
    '/blog/clash-verge-windows-mac-guide': '/blog/clash-verge-setup-guide',
    '/blog/shadowrocket-ios-setup-guide': '/blog/shadowrocket-ios-tutorial',
    '/blog/chatgpt-claude-ai-best-nodes': '/blog/chatgpt-streaming-unlock-practice',
    '/blog/tiktok-live-cross-border-ip-guide': '/blog/chatgpt-streaming-unlock-practice',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  server: {
    port: 5300,
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.endsWith('/signin/') &&
        !page.endsWith('/signup/') &&
        !page.includes('/elements') &&
        !page.includes('/page/1/'),
    }),
    {
      name: 'sitemap-alias',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const sitemapIndexPath = fileURLToPath(new URL('sitemap-index.xml', dir));
          const sitemapPath = fileURLToPath(new URL('sitemap.xml', dir));
          if (fs.existsSync(sitemapIndexPath)) {
            fs.copyFileSync(sitemapIndexPath, sitemapPath);
          }
        },
      },
    },
  ],
});
