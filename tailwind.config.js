/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#1ABC9C',
        // 'soft-primary': '#A028ED',
        // 'secondary': '#5CD111',
        // 'soft-secondary' : '#75ED28',
        // 'error' : '#E6194D',
        // 'soft-error' : '#EB4770',
        // 'success' : '#62D862',
        // 'soft-success' : '#8BE28B',
        // 'white': '#FFFFFF',
        // 'dark-white': '#F4F5F6',
        // 'soft-gray': '#E8E9EB',
        // 'dark-gray': '#AAAAAA',
        // 'light-black': '#263455',
        // 'soft-black' : '#1E293B',
        // 'black': '#0F172A'
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      fontFamily: {
        // sans:['Pitagon']
      }
    },
  },
  plugins: [],
}

