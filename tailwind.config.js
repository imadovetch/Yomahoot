/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-dark': 'var(--app-dark)',
        'app--dark': 'var(--app--dark)',
        'app-light': 'var(--app-light)',
        'app--light': 'var(--app--light)',
        'app-primary': 'var(--app-primary)',
        'app-shadow': 'var(--app-shadow)',
        'app-error': 'var(--error)',
        'app-success' : 'var(--success)',
        'app-danger' : 'var(--danger)',
        'quotes':'var(--quotes)',
        'app---dark':'var(--app---dark)',
      }
    },
  },
  plugins: [],
}
