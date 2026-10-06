import { defineConfig } from "astro/config";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.zmiany.eu",
  trailingSlash: "always",
  compressHTML: true,
  markdown: { rehypePlugins: [rehypeSlug], smartypants: false },
});
