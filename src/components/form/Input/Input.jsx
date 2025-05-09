import PropTypes from 'prop-types';
import FieldError from '../FieldError/FieldError';
import './Input.scss';

const Input = ({
  type = 'text',
  placeholder,
  error,
  register,
  className = '',
}) => {
  return (
    <div className={`input-wrapper ${error ? 'input-error' : ''} ${className}`}>
      <input type={type} placeholder={placeholder} {...register} />
      {error && <FieldError message={error} />}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Input;
