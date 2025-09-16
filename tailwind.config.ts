import type { Config } from "tailwindcss";
import  { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "hsl(var(--color-primary) / <alpha-value>)",
				secondary: "hsl(var(--color-secondary) / <alpha-value>)",
				tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
				"black-100": "hsl(var(--color-black-100) / <alpha-value>)",
				"black-200": "hsl(var(--color-black-200) / <alpha-value>)",
				"white-100": "hsl(var(--color-white-100) / <alpha-value>)",
				accent: "hsl(var(--color-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--color-accent-2) / <alpha-value>)",
				"accent-3": "hsl(var(--color-accent-3) / <alpha-value>)",
				muted: "hsl(var(--color-muted) / <alpha-value>)",
				success: "hsl(var(--color-success) / <alpha-value>)",
				warning: "hsl(var(--color-warning) / <alpha-value>)",
				error: "hsl(var(--color-error) / <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/herobg.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
