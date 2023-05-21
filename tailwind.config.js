/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        'light-content': '#A7A7A7',
        'dark-heading': '#1f2428',
        'dark-content': '#666666',
        'light-heading': '#CCCCCC',
        'dark-mode': '#191919',
        'dark-card': '#363636',
        'green-text': '#018C0F',
        greenbg: '#D7FFE0',
      },
    },
  },
  plugins: [],
};
