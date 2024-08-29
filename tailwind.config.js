/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        brown: '#220901',
        mustard: '#F6AA1C',
        cream: '#F0EADE',
        orange: '#BC3908',
    },
    fontFamily: {
      'heading': ['Montserrat', 'serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      body: '1.6rem',
      bodyMedium: '1.8rem',
      smallBody: '1.4rem',
      subHeading: '3.0rem',
      smallSubHeading: '2.0rem',
      subHeading2: '2.4rem',
      heading: '5.0rem',
    },
    },
  },
  plugins: [],
}

