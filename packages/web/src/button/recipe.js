import { sharedObject } from "@example/core";
import { cva } from "../../styled-system/css";

export const buttonWithCva = cva({
  base: {},
  variants: {
    variant: {
      primary: {
        backgroundColor: "brand.900",
      },
    },
  },
});

export const buttonWithSharedObject = cva({
  base: { color: "white" },
  variants: {
    variant: {
      primary: sharedObject,
    },
  },
});
