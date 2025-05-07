import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import './SignUpModal.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { registerUser } from '../../api/register.js';

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});

const SignUpModal = ({ onSwitch, onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const resultAction = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(resultAction)) {
      toast.success('Account created successfully!');
      onSuccess();
    } else {
      toast.error(
        resultAction.payload || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="auth-modal">
      <h2>SIGN UP</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        <Input
          type="text"
          placeholder="Name*"
          register={register('name')}
          error={errors.name?.message}
        />

        <Input
          type="email"
          placeholder="Email*"
          register={register('email')}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Password"
          register={register('password')}
          error={errors.password?.message}
          className="last-input"
          showPasswordToggle
        />

        <Button
          className="button"
          type="submit"
          variant="grey"
          size="large"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Signing up...' : 'CREATE'}
        </Button>
      </form>

      <p className="text">
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
