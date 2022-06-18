import React from 'react';
import Button from './Button';

export default {
  title: 'DigBang/Button',
  component: Button,
};

const Template = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <Button variant="primary"> OBTENÉ FIJA POR MES </Button>
    <Button variant="secondary" textSmall> VER DETALLE DE CUOTAS </Button>
  </div>
);

export const primary = Template.bind({});
