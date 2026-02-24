import { defineConfig } from "vite";

export default defineConfig({
	test: {
		reporters: ['json'],
    outputFile: 'test.json',
		environment: "jsdom",
	},
});
