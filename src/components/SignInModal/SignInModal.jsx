import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import './SignInModal.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputPassword from '../InputPassword/InputPassword';
import { loginUser } from '../../api/login.js';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});

const SignInModal = ({ onSwitch, onSuccess }) => {
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
    const resultAction = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(resultAction)) {
      toast.success('Logged in successfully!');
      onSuccess();
    } else {
      toast.error(
        resultAction.payload || 'Login failed. Please check your credentials.'
      );
    }
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

        <InputPassword
          placeholder="Password"
          register={register('password')}
          error={errors.password?.message}
          className="last-input"
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
