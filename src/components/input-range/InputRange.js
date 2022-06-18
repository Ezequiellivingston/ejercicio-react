import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './InputRange.css';

function inputRange(props) {
  const {
    value, onChange, max, min, step, indicatortLeft, indicatortRight,
  } = props;

  function IndicatortLeft() {
    if (!indicatortLeft) return <span>{min}</span>;

    return <indicatortLeft min={min} />;
  }

  function IndicatortRight() {
    if (!indicatortRight) return <span>{max}</span>;

    return <indicatortRight max={max} />;
  }

  return (
    <div className="db-input-range">
      <div className="db--input-range__input">
        <Slider
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(v) => onChange(v)}
        />
      </div>

      <div className="db--input-range__indicator">
        <IndicatortLeft />
        <IndicatortRight />
      </div>
    </div>
  );
}

inputRange.defaultProps = {
  min: undefined,
  max: undefined,
  indicatortLeft: undefined,
  indicatortRight: undefined,
  onChange: () => {},
};

inputRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  indicatortLeft: PropTypes.element,
  indicatortRight: PropTypes.element,
};
export default inputRange;
