import React from "react";
import { ButtonFromConfigRecipe } from "./index";
import { ButtonWithCva } from "./button-with-cva";
import { buttonWithSharedObject } from "./recipe";

export default {
  title: "Button",
};

export const Both = {
  render: () => {
    return (
      <>
        <ButtonFromConfigRecipe variant="primary">
          ButtonFromConfigRecipe
        </ButtonFromConfigRecipe>
        <ButtonWithCva variant="primary">ButtonWithCva</ButtonWithCva>
        <div className={buttonWithSharedObject({ variant: "primary" })}>
          With shared object
        </div>
      </>
    );
  },
};

export const NotWorking = {
  render: () => {
    return (
      <ButtonFromConfigRecipe variant="primary">
        Hello PandaCSS
      </ButtonFromConfigRecipe>
    );
  },
};

export const Working = () => {
  return <ButtonWithCva variant="primary">Hello PandaCSS</ButtonWithCva>;
};
