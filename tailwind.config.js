/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				color: {
					dark: '#040D12',
					greenDark: '#183D3D',
					greenMiddle: '#5C8374',
					greenLow: '#93B1A6',
					grey: '#161616',
					white: '#FFFFFF',
					darkPurple: '#4635B1',
					softPurple: '#B771E5',
					softGreen: '#AEEA94',
					brokenWhite: '#FFFBCA',
					softBlue: "#5879C4",
					jungleGreen: "#22A585",
					mintGreen: "#37C287",
					cherryRed: "#D92632",
					deepBlue: "#004EB2",
					skyBlue: "#2F96F4",
					lightBlue: "#BCE3F9",
					gold: "#F7C257",
					primerText: "#404040",
					secondaryText: "#404856",
					border: "#E2E1DE",
					lightGray: "#F7F5F2",
					subtleGray: "#F8F9FC"
				}
			},
			fontFamily:{
				Mono:['Martian Mono', 'monospace']
			}
		},

	},
	plugins: [require("tailwindcss-animate")],
}
