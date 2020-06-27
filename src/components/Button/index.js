import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButonContainer } from './style';

const Button = ({ name, width, onClick }) => {
  return (
    <ButonContainer width={width}>
      <button onClick={onClick}>{name}</button>
    </ButonContainer>
  );
};
// Runtime props type checking
Button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
