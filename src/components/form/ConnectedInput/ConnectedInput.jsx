import React from 'react';
import classNames from 'classnames';
import { useFormContext, Controller } from 'react-hook-form';
import FieldError from '../FieldError/FieldError';

import styles from './ConnectedInput.module.scss';

const ConnectedInput = ({ name, type = "text", placeholder, rules }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={styles.formGroup}>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={classNames(styles.input, { [styles.error]: !!fieldState.error })}
          />

          {!!fieldState.error && (
            <FieldError message={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};

export default ConnectedInput;
