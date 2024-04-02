import { defineConfig } from '@pandacss/dev';
import { btnRecipe, sharedObject, disabled } from '@example/core';

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
            700: { value: 'blue' },
            500: { value: 'gray' },
          },
        },
      },
      recipes: {
        appButton: {
          className: 'app-btn',
          variants: btnRecipe,
          compoundVariants: [
            {
              disabled: true,
              primary: disabled.primary,
            },
          ],
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
    css: [{ properties: { backgroundColor: [sharedObject.backgroundColor] } }],
    // recipes: '*', you can also use this to pre-generate the CSS for all recipes
    // even if you don't use all of them
    recipes: {
      appButton: ['*'],
    },
  },
});
