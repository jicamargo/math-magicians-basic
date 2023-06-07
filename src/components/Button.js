import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { type, text, className } = props;
  return (
    <button type="button" className={`button ${type} ${className}`}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
