import React, { useState } from 'react';
import InputRange from './InputRange';

export default {
  title: 'DigBang/InputRange',
  component: InputRange,
};

const Template = () => {
  const [value, setValue] = useState(1000);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p>{value}</p>

      <InputRange
        min={0}
        max={5000}
        step={1}
        value={value}
        onChange={(v) => setValue(v)}
        indicatorRight={({ max }) => <span>{max}</span>}
      />
    </div>
  );
};

export const primary = Template.bind({});
