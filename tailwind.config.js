/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "rgba(0, 0, 0, 0.75)",
        "light-gray-bg": "#0000000a",
        "light-gray-hvr": "#000000e6",
        "light-blue": "#0a66c2",
        "light-blue-bg": "#70b5f91a",
        "light-blue-hvr": "#004182",
        "nav-light-gray": "#00000099",
        "pale-black": "#222",
        "pale-brown": "#8f5849",
        "linkedin-blue": "#2977c9",
        "linkedin-blue-hvr": "#006097",
        "search-bg": "#eef3f8",
        "main-bg-clr": "#f3f2ef",

        // font clrs
        "main-fnt-clr": "#000000e6",
        "sidebar-bg-hvr": "#00000014",

        // icons
        "blue-icon": "#0000ff",
      },
    },
  },
  plugins: [],
};
