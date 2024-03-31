import { cva } from '../../styled-system/css';
import { btnRecipe } from '@example/core';

export const button = cva({
  base: {},
  variants: {
    variant: btnRecipe.variant,
  },
});

export const buttonV2 = cva({
  base: {},
  variants: {
    variant: {
      primary: {
        backgroundColor: 'brand.900',
      },
    },
  },
});
