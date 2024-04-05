/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Noto Sans JP', sans-serif"
      },
      maxWidth: {
        'custom-description': "29ch",
        'custom-contact': "35ch",
        'custom-contact-lg': "45ch",
        'custom-title-lg': "20ch",
        'custom-subtitle-lg': "55ch"
      },
      backgroundImage: {
        'custom-bg': "url('./nnnoise.svg')"
      }
    },
  },
  plugins: [],
}

