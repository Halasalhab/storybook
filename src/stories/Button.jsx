import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ variant, color, size, label, ...props }) => {

  let buttonStyles;

  if (variant === 'primary') {
    buttonStyles = {
      backgroundColor: color,
      color: 'white',
      border: `2px solid ${color}`,
    };
  } else if (variant === 'secondary') {
    buttonStyles = {
      backgroundColor: 'white',
      color: color,
      border: `2px solid ${color}`,
    };
  } else if (variant === 'text') {
    buttonStyles = {
      backgroundColor: 'transparent',
      color: color,
      border: 'none'
    };
  }

  const classNames = ['button', `button--${size}`, variant === 'text' ? 'button-text' : ''].join(' ');
  
  return (
    <button
      type="button"
      className={classNames}
      style={buttonStyles}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '#1ea7fd',
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
};
