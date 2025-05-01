import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import './SignUpModal.scss';

const schema = yup.object({
  name: yup.string().min(2, 'Minimum 2 characters').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

const SignUpModal = ({ onSwitch, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fakeRegisterRequest(data);
      toast.success('Account created!');
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-modal">
      <h2>SIGN UP</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        <input type="text" placeholder="Name*" {...register('name')} />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input type="email" placeholder="Email*" {...register('email')} />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <span className="error">{errors.password.message}</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'CREATE'}
        </button>
      </form>

      <p>
        I already have an account?{' '}
        <span className="switch" onClick={onSwitch}>
          Sign in
        </span>
      </p>
    </div>
  );
};

SignUpModal.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default SignUpModal;

// Тимчасовий запит
const fakeRegisterRequest = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'existing@example.com') {
        reject(new Error('User already exists'));
      } else {
        resolve({ token: 'fake-token' });
      }
    }, 1000);
  });
