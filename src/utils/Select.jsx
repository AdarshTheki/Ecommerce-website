import React, { forwardRef, useId } from 'react';

const Select = forwardRef(function Select({ options, label, className = '', ...props }, ref) {
  const id = useId();
  return (
    <div className='card mb-2 shadow p-2'>
      {/* label */}
      {label && (
        <label className='fw-bold fs-6' htmlFor={id}>
          {label}
        </label>
      )}
      {/* select */}
      <select {...props} ref={ref} className={`form-select ${className}`} id={id}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});
export default Select;
