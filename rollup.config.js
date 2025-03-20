export default {
	input: "src/index.ts",
	output: {
		dir: "dist",
		format: "es",
	},
	external: ["@rollup/rollup-linux-x64-gnu"], // Add this
};
