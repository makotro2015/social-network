import React from 'react';
import './Button.scss';

function Button (props) {
  return (
    <button className="simple-btn" onClick={props.click}>{props.name}</button>
  );
}

export default Button;