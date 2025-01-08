/** @type {import('tailwindcss').Config} */
module.exports = {
    // Define which files Tailwind should look at
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        // We can add custom colors matching your AmazinGrace theme
        colors: {
          'sai-purple': '#4B0082',
          'sai-gold': '#D4AF37',
          'sai-rose': '#E5C1A9',
        }
      },
    },
    plugins: [],
  }