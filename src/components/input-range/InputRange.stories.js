import React, { useState } from 'react';
import InputRange from './InputRange';
import { formatCurrency } from '../../helpers/format';

export default {
  title: 'DigBang/InputRange',
  component: InputRange,
};

const Template = () => {
  const [value, setValue] = useState(2500);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <p>{value}</p>

      <InputRange
        min={0}
        max={5000}
        step={1}
        value={value}
        onChange={(v) => setValue(v)}
        indicatorRight={({ max }) => <span>{formatCurrency(max)}</span>}
      />
    </div>
  );
};

export const primary = Template.bind({});
