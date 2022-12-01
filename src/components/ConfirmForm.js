import './ConfirmForm.css';

const ConfirmForm = () => {
  return (
    <form className='confirm-form'>
      <label>
        <span>Cardholder Name</span>
        <input type='text' placeholder='e.g. Jane Appleseed' />
      </label>
      <label>
        <span>Card Number</span>
        <input type='text' placeholder='e.g. 1234 5678 9123 0000' />
      </label>
      <div className='date-and-cvc'>
        <label className='date'>
          <span>Exp. Date (MM/YY)</span>
          <div className='date-inputs'>
            <input type='text' placeholder='MM' />
            <input type='text' placeholder='YY' />
          </div>
        </label>
        <label>
          <span>CVC</span>
          <input type='text' placeholder='e.g. 123' />
        </label>
      </div>
      <button type='submit' className='btn'>
        Confirm
      </button>
    </form>
  );
};

export default ConfirmForm;
