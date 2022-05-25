import React from 'react';
import './FormsControls.scss';

const Element = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={`form-control ${hasError ? 'error' : ''}`}>
      <props.elementtype {...input} {...props} />
      {hasError && (
        <div>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Element;