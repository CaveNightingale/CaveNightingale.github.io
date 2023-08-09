import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkMath from "remark-math";
import rehypeKatexSvelte from "rehype-katex-svelte";
import rainbow from "rainbow-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: "./src/lib/note/layout.svelte",

  // Due to a bug in mdsvex, we are unable to highlight code blocks
  // Since we have no code blocks now, we simply wait for the fix
  // Use `PlainTextView` to display code blocks without highlighting

  // highlight: {
  //   highlighter: (code, lang) => rainbow.colorSync(code, lang),
  // },

  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeAutolinkHeadings],
});

export default config;
