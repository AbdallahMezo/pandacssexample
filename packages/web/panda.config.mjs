import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            900: { value: 'red' },
            800: { value: 'green' },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',

  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  dependencies: [
    './src/**/*.{js,js,ts,tsx}',
    './src/**/*.stories.{js,js,ts,tsx}',
  ],
  staticCss: {
    recipes: '*',
  },
});
