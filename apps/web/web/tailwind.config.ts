import type { Config } from "tailwindcss"

export default {
  ignores: ["dist/**/*.ts", "dist/**", "apps/web/infra/eslint.config.js", "**/*.js"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#EBEBEB",
        uwc_blue: "#2567AA",
      },
    },
  },
  plugins: [],
} satisfies Config
