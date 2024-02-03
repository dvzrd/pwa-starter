import config from 'chad-ui/tailwind.config'

/** @type {import('tailwindcss').Config} */

export default {
  ...config,
  content: [
    './node_modules/chad-ui/**/*.{mjs,js,ts,jsx,tsx}',
    './src/**/*.{mjs,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      ...config.theme.extend
    }
  },
  plugins: [...config.plugins]
}
