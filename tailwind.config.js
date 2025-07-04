/** @type {import('tailwindcss').Config} */
export default {
  content: [
        './src/**/*.{js,ts,jsx,tsx}',  // for React projects
    './public/index.html'          // if using HTML outside JS files
  ],
  theme: {
    extend: {
       backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
}

