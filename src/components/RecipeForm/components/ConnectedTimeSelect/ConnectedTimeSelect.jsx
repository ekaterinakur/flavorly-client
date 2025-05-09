import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Icon from '../../../Icon/Icon';
import { IconButton } from '../../../IconButton/IconButton';

import styles from './ConnectedTimeSelect.module.scss';

const MIN = 1;
const MAX = 360;
const STEP = 5;

const ConnectedTimeSelect = ({ name }) => {
  const { control } = useFormContext();

  const increase = (field) => {
    const step = field.value >= 10 ? STEP : 1;
    const next = Math.min(Number(field.value) + step, MAX);
    field.onChange(next);
  };

  const decrease = (field) => {
    const step = field.value > 10 ? STEP : 1;
    const next = Math.max(Number(field.value) - step, MIN);
    field.onChange(next);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={10}
      render={({ field }) => (
        <div className={styles.wrapper}>
          <IconButton
            className={styles.btnCircle}
            disabled={field.value === MIN}
            onClick={() => decrease(field)}
          >
            <Icon name="minus" />
          </IconButton>
          <span className={styles.value}>{field.value} min</span>
          <IconButton
            className={styles.btnCircle}
            disabled={field.value === MAX}
            onClick={() => increase(field)}
          >
            <Icon name="plus" />
          </IconButton>
        </div>
      )}
    />
  );
};

export default ConnectedTimeSelect;
