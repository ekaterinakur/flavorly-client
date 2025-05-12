import React, { useState } from 'react';
import classNames from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import FieldError from '../FieldError/FieldError';
import Icon from '../../Icon/Icon';

import styles from './ConnectedSelect.module.scss';

const ConnectedSelect = ({
  name,
  options,
  defaultValue,
  placeholder = 'Select',
  rules,
  onChange,
}) => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={styles.selectWrapper}>
          <Select
            defaultValue={defaultValue}
            options={options}
            placeholder={placeholder}
            isSearchable
            isClearable
            onMenuOpen={() => setIsOpen(true)}
            onMenuClose={() => setIsOpen(false)}
            onChange={(selected) => {
              field.onChange(selected?.value);
              onChange && onChange(selected?.value);
            }}
            onBlur={field.onBlur}
            classNames={{
              control: () =>
                classNames(styles.select, {
                  [styles.error]: !!fieldState.error,
                }),
              placeholder: () => styles.selectPlaceholder,
              menu: () => styles.selectMenu,
              option: (state) =>
              classNames(styles.selectMenuListItem, {
                [styles.selectedOption]: state.isSelected,
                [styles.focusedOption]: state.isFocused,
              }),
            }}
            components={{
              DropdownIndicator: () => (
                <Icon
                  name="chevron-down"
                  size="18px"
                  className={classNames(styles.arrow, {
                    [styles.open]: isOpen,
                  })}
                />
              ),
              IndicatorSeparator: null,
            }}
          />

          {!!fieldState.error && (
            <FieldError message={fieldState.error.message} />
          )}
        </div>
      )}
    />
  );
};

export default ConnectedSelect;
