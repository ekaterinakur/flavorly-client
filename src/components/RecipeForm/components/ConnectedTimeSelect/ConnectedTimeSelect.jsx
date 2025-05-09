import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Icon from '../../../Icon/Icon';

import styles from './ConnectedTimeSelect.module.scss';

const MIN = 5;
const MAX = 360;
const STEP = 5;

const ConnectedTimeSelect = ({ name }) => {
  const { control } = useFormContext();

  const increase = (field) => {
    const next = Math.min(Number(field.value) + STEP, MAX);
    field.onChange(next);
  };

  const decrease = (field) => {
    const next = Math.max(Number(field.value) - STEP, MIN);
    field.onChange(next);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={10}
      render={({ field }) => (
        <div className={styles.wrapper}>
          <button
            type="button"
            onClick={() => decrease(field)}
            className={styles.btnCircle}
          >
            <Icon name="minus" />
          </button>
          <span className={styles.value}>{field.value} min</span>
          <button
            type="button"
            onClick={() => increase(field)}
            className={styles.btnCircle}
          >
            <Icon name="plus" />
          </button>
        </div>
      )}
    />
  );
};

export default ConnectedTimeSelect;
