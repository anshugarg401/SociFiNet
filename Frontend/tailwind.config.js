/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      // Existing breakpoints...
      'custom-1300': '1300px',
      'sm': '630px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  plugins: [
   
  ],
  corePlugins: { preflight: false },
  
};
