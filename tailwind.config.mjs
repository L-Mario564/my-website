/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1400px',
        '2md': '860px',
        xs: '450px'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        'source-code-pro': ['Source Code Pro', 'monospace']
      },
      colors: {
        woodsmoke: {
          50: '#f6f7f9',
          100: '#ebeef3',
          200: '#d3d9e4',
          300: '#adbacc',
          400: '#8094b0',
          500: '#607797',
          600: '#4c5f7d',
          700: '#3e4d66',
          800: '#364256',
          900: '#313a49',
          950: '#0c0e12'
        }
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.5s infinite',
        'landing-title': 'fade-in 0.85s forwards ease-out',
        'landing-header-blur': 'fade-in 1.75s forwards ease-out',
        'landing-welcome': 'fade-in-slide-to-l-lg 0.85s forwards ease-out',
        'paragraph': 'fade-in-slide-to-t-sm 0.65s forwards ease-out',
        'h1': 'fade-in-slide-to-t-sm 0.65s forwards ease-out',
        'h2-to-t': 'fade-in-slide-to-t-xs 0.65s forwards ease-out',
        'h2-to-l': 'fade-in-slide-to-l-xs 0.65s forwards ease-out',
        'p': 'fade-in 0.65s forwards ease-out',
        'slideshow-img-in': 'fade-in 0.3s forwards ease-out',
        'slideshow-img-out': 'fade-out 0.3s forwards ease-out',
        'project': 'fade-in-slide-to-t-sm 0.65s forwards ease-out',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'fade-out': {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        },
        'fade-in-slide-to-l-lg': {
          '0%': {
            opacity: '0',
            right: '-250px'
          },
          '20%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1',
            right: '0'
          }
        },
        'fade-in-slide-to-l-xs': {
          '0%': {
            opacity: '0',
            right: '-50px'
          },
          '20%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1',
            right: '0'
          }
        },
        'fade-in-slide-to-t-sm': {
          '0%': {
            opacity: '0',
            bottom: '-100px'
          },
          '20%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1',
            bottom: '0'
          }
        },
        'fade-in-slide-to-t-xs': {
          '0%': {
            opacity: '0',
            bottom: '-50px'
          },
          '20%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1',
            bottom: '0'
          }
        },
        type: {
          from: {
            width: '0'
          },
          to: {
            width: '100%'
          }
        },
        untype: {
          from: {
            width: '100%'
          },
          to: {
            width: '0'
          }
        },
        'cursor-blink': {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      }
    },

  },
  plugins: []
};
