/** @type {import('tailwindcss').Config} */
module.exports = {
  // AÑADIMOS LA LÍNEA MÁS IMPORTANTE:
  prefix: 'hx:',

  content: [
    "./hugo_stats.json",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/hextra/layouts/**/*.html",
    "./themes/hextra/content/**/*.md",
    "./assets/**/*.css",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ... (El resto de tu configuración se queda exactamente igual)
      colors: {
        primary: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
        secondary: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
        accent: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        serif: ['Georgia', 'ui-serif', 'Times New Roman', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--text-primary)', a: { color: 'var(--link-color)', '&:hover': { color: 'var(--link-hover)', }, }, h1: { color: 'var(--text-primary)', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', }, h2: { color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', }, h3: { color: 'var(--text-primary)', }, h4: { color: 'var(--text-primary)', }, h5: { color: 'var(--text-primary)', }, h6: { color: 'var(--text-primary)', }, strong: { color: 'var(--text-primary)', }, code: { color: 'var(--code-text)', backgroundColor: 'var(--code-bg)', borderRadius: '0.375rem', padding: '0.25rem 0.5rem', }, pre: { backgroundColor: 'var(--code-bg)', border: '1px solid var(--code-border)', borderRadius: '0.5rem', }, blockquote: { borderLeftColor: 'var(--primary-color)', backgroundColor: 'var(--bg-secondary)', }, table: { backgroundColor: 'var(--bg-secondary)', borderRadius: '0.5rem', overflow: 'hidden', }, th: { backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', }, td: { borderBottomColor: 'var(--border-color)', },
          },
        },
      },
      animation: { 'fade-in': 'fadeIn 0.5s ease-in-out', 'slide-up': 'slideUp 0.3s ease-out', 'bounce-gentle': 'bounceGentle 2s infinite', },
      keyframes: { fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' }, }, slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' }, }, bounceGentle: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' }, },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}