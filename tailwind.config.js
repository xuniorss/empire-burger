/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            lilita: 'var(--font-lilitaone-400)',
            archivo: 'var(--font-archivoblack-400)',
            oswald: 'var(--font-oswald-400)',
            lato: 'var(--font-lato)',
            squada: 'var(--font-squadaone-400)',
         },

         colors: {
            background: '#FAF3F2',

            titleblack60: '#635352',
            titleblack87: '#34201F',

            btnyellow: '#F59A1B',
            btnred: '#F43127',

            title: 'rgb(29, 6, 5)',
         },
      },
   },
   plugins: [],
}
