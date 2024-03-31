import React from 'react';
import { Button } from './index';
import { ButtonV2 } from './button-v2';

export default {
  title: 'Button',
};

export const NotWorking = {
  render: () => {
    return <Button variant='primary'>Hello PandaCSS</Button>;
  },
};

export const Working = () => {
  return <ButtonV2 variant='primary'>Hello PandaCSS</ButtonV2>;
};
