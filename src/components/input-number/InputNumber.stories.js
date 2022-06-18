import React, { useState } from 'react';
import InputNumber from './InputNumber';

export default {
  title: 'DigBang/InputNumber',
  component: InputNumber,
};

const Template = () => {
  const [value, setValue] = useState(1000000);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <InputNumber placeholder="00" />

      <InputNumber value={value} onChange={(v) => setValue(v)} placeholder="00" elementLeft={<span>$</span>} />
    </div>
  );
};

export const primary = Template.bind({});
