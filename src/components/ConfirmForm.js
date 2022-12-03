import MainButton from './MainButton';

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
}) => {
  return (
    <form className='confirm-form' onSubmit={onFormSubmit}>
      <label>
        <span>Cardholder Name</span>
        <input
          type='text'
          value={name}
          onChange={onNameChange}
          placeholder='e.g. Jane Appleseed'
        />
      </label>
      <label>
        <span>Card Number</span>
        <input
          type='text'
          value={number}
          onChange={onNumberChange}
          placeholder='e.g. 1234 5678 9123 0000'
        />
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
            />
            <input
              type='text'
              value={year}
              onChange={onYearChange}
              placeholder='YY'
            />
          </div>
        </label>
        <label>
          <span>CVC</span>
          <input
            type='text'
            value={cvc}
            onChange={onCvcChange}
            placeholder='e.g. 123'
          />
        </label>
      </div>
      <MainButton title='Confirm' />
    </form>
  );
};

export default ConfirmForm;
