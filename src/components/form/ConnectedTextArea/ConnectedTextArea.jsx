import React from 'react';
import classNames from 'classnames';
import { useFormContext, Controller } from 'react-hook-form';
import FieldError from '../FieldError/FieldError';

import styles from './ConnectedTextArea.module.scss';

const ConnectedTextArea = ({ name, placeholder, maxLength, rules }) => {
  const { control, watch } = useFormContext();
  const text = watch(name) || '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={styles.formGroup}>
          <div className={styles.textareaWrapper}>
            <textarea
              {...field}
              rows={1}
              placeholder={placeholder}
              className={classNames(styles.textarea, { [styles.error]: !!fieldState.error })}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
                field.onChange(e);
              }}
              maxLength={maxLength}
            />
            <div className={styles.counter}>
              <span
                className={classNames({ [styles.current]: text.length > 0 })}
              >
                {text.length}
              </span>
              <span>/{maxLength}</span>
            </div>
          </div>

          {!!fieldState.error && (
            <FieldError message={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};

export default ConnectedTextArea;
