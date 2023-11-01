import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc_header: "#090909",
        zinc_sidebar: "#121212",
        zinc_body: "#000000",
        zinc_shape1: "#242424",
        zinc_shape2: "#2A2A2A",
      }
    },
  },
  // plugins: [require("daisyui")],
}
export default config
