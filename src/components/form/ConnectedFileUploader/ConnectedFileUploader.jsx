import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useFormContext, Controller } from 'react-hook-form';
import Icon from '../../Icon/Icon.jsx';
import FieldError from '../FieldError/FieldError.jsx';

import styles from './ConnectedFileUploader.module.scss';

export const ConnectedFileUploader = ({ name, rules }) => {
  const { control, watch } = useFormContext();
  const [previewUrl, setPreviewUrl] = useState(null);

  const file = watch(name);

  useEffect(() => {
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={styles.formGroup}>
          <input
            type="file"
            id={name}
            accept="image/*"
            onChange={(e) => field.onChange(e.target.files?.[0])}
            className={styles.input}
          />

          {previewUrl ? (
            <label htmlFor={name} className={classNames({ [styles.error]: !!fieldState.error })}>
              <img src={previewUrl} alt="Preview" className={styles.preview} />

              <div className={styles.content}>
                <p className={styles.label}>Upload another photo</p>
              </div>
            </label>
          ) : (
            <label htmlFor={name} className={classNames(styles.uploader, { [styles.error]: !!fieldState.error })}>
              <div className={styles.content}>
                <Icon name="camera-frame" size={64} color="BFBEBE" />
                <p className={styles.label}>Upload a photo</p>
              </div>
            </label>
          )}

          {!!fieldState.error && (
            <FieldError message={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};

export default ConnectedFileUploader;
