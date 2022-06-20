import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './InputRange.css';

function inputRange(props) {
  const {
    value, onChange, max, min, step, indicatorLeft: ElementLeft, indicatorRight: ElementRight,
  } = props;

  function IndicatortLeft() {
    if (!ElementLeft) return <span>{min}</span>;

    return <ElementLeft min={min} />;
  }

  function IndicatortRight() {
    if (!ElementRight) return <span>{max}</span>;

    return <ElementRight max={max} />;
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
  indicatorLeft: undefined,
  indicatorRight: undefined,
  onChange: () => { },
};

inputRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  indicatorLeft: PropTypes.func,
  indicatorRight: PropTypes.func,
};
export default inputRange;
