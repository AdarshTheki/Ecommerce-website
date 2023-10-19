import React from 'react';

export default function Buttons({ children, className = '', ...props }) {
  return (
    <button className={`btn shadow ${className}`} {...props}>
      {children}
    </button>
  );
}
