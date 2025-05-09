import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FieldError from '../FieldError/FieldError';

import styles from './ConnectedTitleInput.module.scss';

const ConnectedTitleInput = ({ name, placeholder, rules }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={styles.formGroup}>
          <input
            {...field}
            id={name}
            placeholder={placeholder}
            className={styles.input}
          />

          {!!fieldState.error && (
            <FieldError message={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};

export default ConnectedTitleInput;
