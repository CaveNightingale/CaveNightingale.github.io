import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkMath from "remark-math";
import rehypeKatexSvelte from "rehype-katex-svelte";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: "./src/lib/note/layout.svelte",

  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatexSvelte],
});

export default config;
