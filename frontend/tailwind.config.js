module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cover": "url('../images/bg-cover.png')",
      },
    },
  },
  plugins: [],
}
