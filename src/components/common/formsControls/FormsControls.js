import React from 'react';
import './FormsControls.scss';

export const Element = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`form-control ${hasError ? 'error' : ''}`}>
      <props.elementtype {...input} {...props} />
      {hasError && (
        <div>
          <span>{meta.error}</span>
        </div>
      )}
    </div>
  );
};
// const FormControl = ({ input, meta, child, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={`form-control ${hasError ? 'error' : ''}`}>
//       {props.children}
//       {hasError && (
//         <div>
//           <span>{meta.error}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export const Textarea = (props) => {
//   const { input, meta, child, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       <textarea {...input} {...restProps} />
//     </FormControl>
//   );
// };

// export const Input = (props) => {
//   const { input, meta, child, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       <input {...input} {...restProps} />
//     </FormControl>
//   );
// };
