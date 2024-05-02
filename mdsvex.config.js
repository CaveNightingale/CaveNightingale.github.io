import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkMath from "remark-math";
import rehypeKatexSvelte from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const config = defineConfig({
	extensions: [".svelte.md", ".md", ".svx"],

	smartypants: {
		dashes: "oldschool",
	},

	layout: "./src/lib/note/layout.svelte",

	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeAutolinkHeadings],
});

export default config;