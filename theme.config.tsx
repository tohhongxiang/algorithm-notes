import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: (
		<span>
			<strong>Algorithms</strong>
		</span>
	),
	project: {
		link: "https://github.com/tohhongxiang123/algorithm-notes.git",
	},
	docsRepositoryBase:
		"https://github.com/tohhongxiang123/algorithm-notes/blob/main",
	feedback: {
		content: null,
	},
	footer: {
		text: "Algorithm Notes",
	},
	toc: {
		backToTop: true,
	},
};

export default config;
