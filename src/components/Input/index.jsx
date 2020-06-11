import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({
  target,
  label,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <section className="textInput" >
      <input
        type={type} 
        name={target} 
        id={target}
        onChange={onChange}
        className="form-control"
        required
      />
      {
      <label htmlFor={target}>{label}</label>
      }
    </section>
  )
}

Input.propTypes = {
  target: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
}

export default React.memo(Input);

