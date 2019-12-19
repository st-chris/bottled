import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, error, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {error ? <div className='field-error'>* {error}</div> : null}
    </div>
  );
};

export default FormInput;
