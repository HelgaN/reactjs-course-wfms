import React from 'react';
import './Button.css';

const Button = (props) => {
  const cls = props.type;
  return (
    <button
      onClick={props.onClick}
      className={cls}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
