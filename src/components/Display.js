import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  // result = result || "0";
  return (
    <div className="display">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
