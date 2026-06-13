/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#09090B',
        'bg-surface': '#111113',
        'bg-elevated': '#18181B',
        border: '#27272A',
        'border-subtle': '#1C1C1F',
        'text-primary': '#FAFAFA',
        'text-body': '#E4E4E7',
        'text-muted': '#A1A1AA',
        'text-faint': '#52525B',
        'accent-blue': '#2563EB',
        'accent-green': '#10B981',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        section: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
