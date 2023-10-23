import React, { forwardRef, useId } from 'react';

const Inputs = forwardRef(function Inputs({ label, type = 'text', className = '', ...props }, ref) {
  const id = useId();

  return (
    <div className='form-floating mb-3 shadow'>
      <input
        type={type}
        id={id}
        ref={ref}
        {...props}
        autoComplete='off'
        className={`form-control ${className}`}
      />
      {label && (
        <label className='' htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

export default Inputs;
