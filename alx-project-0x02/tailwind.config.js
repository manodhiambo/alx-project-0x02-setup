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
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
          light: '#6366f1',
        },
        secondary: '#ec4899',
        accent: '#22d3ee',
        muted: '#94a3b8',
        background: '#f9fafb',
        surface: '#ffffff',
        danger: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)',
        smooth: '0 6px 24px rgba(0, 0, 0, 0.08)',
        outline: '0 0 0 3px rgba(99, 102, 241, 0.5)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.heading'),
            },
            h2: {
              fontFamily: theme('fontFamily.heading'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

