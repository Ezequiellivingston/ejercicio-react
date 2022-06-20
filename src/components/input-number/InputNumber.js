import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { formatCurrency, formatNumber } from '../../helpers/format';
import './InputNumber.css';

const FORMAT_CALLBACK = {
  currency: formatCurrency,
  number: formatNumber,
};
function InputNumber(props) {
  const {
    value, format, onChange, placeholder, elementLeft, elementRight,
  } = props;
  const inputRef = useRef();

  const [width, setWidth] = useState();

  function formatValue(v) {
    const currentFormat = FORMAT_CALLBACK[format];
    return currentFormat(v);
  }

  function calculateWidthInputFromLengthValue(v) {
    const length = v.toString().length * 10 || 10;
    const offset = 20;

    setWidth(length + offset);
  }

  function handleInput(e) {
    const v = formatValue((e.target.value).replaceAll('.', '').replaceAll(',', ''));

    inputRef.current.value = formatCurrency(v);
    calculateWidthInputFromLengthValue(v);

    onChange(parseFloat(v));
  }

  useEffect(() => {
    if (!value || !inputRef.current) return;

    const v = formatValue(value);
    inputRef.current.value = v;
    calculateWidthInputFromLengthValue(v);
  }, []);
  useEffect(() => {
    const v = formatValue(value);
    inputRef.current.value = v;
    calculateWidthInputFromLengthValue(v);
  }, [value]);
  return (
    <div className="db-input-number">
      {elementLeft}

      <input
        ref={inputRef}
        placeholder={placeholder}
        onInput={handleInput}
        style={{ width }}
      />

      {elementRight}
    </div>
  );
}

InputNumber.defaultProps = {
  value: undefined,
  placeholder: undefined,
  onChange: () => {},
  elementLeft: undefined,
  elementRight: undefined,
  format: 'number',
};

InputNumber.propTypes = {
  value: PropTypes.number,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func,
  elementLeft: PropTypes.node,
  elementRight: PropTypes.node,
};

export default InputNumber;
