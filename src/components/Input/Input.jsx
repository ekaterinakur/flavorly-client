import PropTypes from 'prop-types';
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
      <input
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <span className="error">{error}</span>}
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
