/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				basic: "#0A4D68",
				primary: "#0A4D68",
			},
		},
	},
	plugins: [],
};
