/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { min: '530px' },
      // => @media (min-width: 640px) { ... }

      md: { min: '768px' },
      // => @media (min-width: 768px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      xl: { min: '1280px' },
      // => @media (min-width: 1280px) { ... }

      xlb: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lgb: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mdb: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      smb: { max: '529px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
