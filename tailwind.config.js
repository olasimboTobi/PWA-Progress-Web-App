/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
      
       
      },
      width: {
       
      },
      height: {
        

      },
    },
  },
  screens:{
    'sm':"320px",
    'md':"768px",
    'lg':"1024",
    'xl': '1280px',
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


