import { useState } from 'react';

import MainButton from './MainButton';
import InputError from './InputError';

import './ConfirmForm.css';

const ConfirmForm = ({
  onFormSubmit,
  onNameChange,
  onNumberChange,
  onMonthChange,
  onYearChange,
  onCvcChange,
  name,
  number,
  month,
  year,
  cvc,
  errors,
}) => {
  return (
    <form className='confirm-form' onSubmit={onFormSubmit}>
      <label className={errors.name.error ? 'error' : ''}>
        <span>Cardholder Name</span>
        <input
          type='text'
          value={name}
          onChange={onNameChange}
          placeholder='e.g. Jane Appleseed'
        />
        <InputError error={errors.name} />
      </label>
      <label className={errors.number.error ? 'error' : ''}>
        <span>Card Number</span>
        <input
          type='text'
          value={number}
          onChange={onNumberChange}
          placeholder='e.g. 1234 5678 9123 0000'
        />
        <InputError error={errors.number} />
      </label>
      <div className='date-and-cvc'>
        <label className='date'>
          <span>Exp. Date (MM/YY)</span>
          <div className='date-inputs'>
            <input
              type='text'
              value={month}
              onChange={onMonthChange}
              placeholder='MM'
              className={errors.month.error ? 'error' : ''}
            />
            <input
              type='text'
              value={year}
              onChange={onYearChange}
              placeholder='YY'
              className={errors.year.error ? 'error' : ''}
            />
          </div>
          <InputError error={errors.month} />
          <InputError error={errors.year} />
        </label>
        <label className={errors.cvc.error ? 'error' : ''}>
          <span>CVC</span>
          <input
            type='text'
            value={cvc}
            onChange={onCvcChange}
            placeholder='e.g. 123'
          />
          <InputError error={errors.cvc} />
        </label>
      </div>
      <MainButton title='Confirm' />
    </form>
  );
};

export default ConfirmForm;
