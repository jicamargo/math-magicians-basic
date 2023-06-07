import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Operator(props) {
  const { text, className } = props;
  return (
    <Button type="operator" text={text} className={`${className}`} />
  );
}

Operator.defaultProps = {
  className: '',
};

Operator.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Operator;
