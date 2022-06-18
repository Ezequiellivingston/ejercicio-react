import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  const {
    variant, block, onClick, children, textSmall,
  } = props;

  const classes = classNames(
    'db-button',
    `db-button--variant-${variant}`,
    { 'db-button--block': block },
    { 'db-button--text-small': textSmall },
  );

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  block: false,
  textSmall: false,
  children: undefined,
  onClick: () => {},
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  block: PropTypes.bool,
  textSmall: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default Button;
