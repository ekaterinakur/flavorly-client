import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import './SignInModal.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});

const SignInModal = ({ onSwitch, onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const response = await fakeLoginRequest(data);
      toast.success('Logged in successfully!');
      if (onSuccess) onSuccess();
    } catch (err) {
      toast.error(err.message || 'Login failed');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="auth-modal">
      <h2>SIGN IN</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
        <Input
          type="email"
          placeholder="Email*"
          register={register('email')}
          error={errors.email?.message}
        />

        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          register={register('password')}
          error={errors.password?.message}
          showPasswordToggle
          icon={showPassword ? 'eye-off' : 'eye'}
          onTogglePassword={togglePasswordVisibility}
          className='last-input'
        />

        <Button
          className="button"
          type="submit"
          variant="grey"
          size="large"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'SIGN IN'}
        </Button>
      </form>

      <p className="text">
        Don’t have an account?{' '}
        <span className="switch" onClick={onSwitch}>
          Create an account
        </span>
      </p>
    </div>
  );
};

SignInModal.propTypes = {
  onSwitch: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
};

export default SignInModal;

const fakeLoginRequest = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email !== 'test@example.com' || data.password !== '123456') {
        reject(new Error('Invalid credentials'));
      } else {
        resolve({ token: 'fake-login-token' });
      }
    }, 1000);
  });
