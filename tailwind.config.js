/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#050510",
        surface: "#0d0d1f",
        card: "#10102a",
        border: "#1e1e4a",
        accent: "#7c3aed",
        accent2: "#06b6d4",
        accent3: "#f59e0b",
        text: "#e2e8f0",
        muted: "#64748b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
