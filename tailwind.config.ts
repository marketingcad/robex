import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0A0A0A',
        'bg-light': '#111111',
        'text-primary': '#E5E5E5',
        'text-secondary': '#A3A3A3',
        'accent-blue': '#00BFFF',
        'accent-orange': '#FFA500',
        'border-color': '#222222',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1' }],
        'title': ['2.25rem', { lineHeight: '1.2' }],
        'subtitle': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
}

export default config
