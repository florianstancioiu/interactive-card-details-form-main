import { useState } from 'react';

import CardsBg from './components/CardsBg';
import ConfirmForm from './components/ConfirmForm';
import ThankYou from './components/ThankYou';

import './App.css';

function App() {
  const [data, setData] = useState({
    number: '0000 0000 0000 0000',
    name: 'Jane Appleseeed',
    month: '00',
    year: '00',
    cvc: '123',
  });
  const [showForm, setShowForm] = useState(true);

  const onNameChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        name: event.target.value,
      };
    });
  };

  const onNumberChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        number: event.target.value,
      };
    });
  };

  const onMonthChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        month: event.target.value,
      };
    });
  };

  const onYearChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        year: event.target.value,
      };
    });
  };

  const onCvcChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        cvc: event.target.value,
      };
    });
  };

  const onConfirmFormSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setShowForm(false);
    }
  };

  const onThankYouContinueClickHandler = () => {
    setShowForm(true);
  };

  const validateForm = () => {
    return (
      validateName() &&
      validateNumber() &&
      validateMonth() &&
      validateYear() &&
      validateCvc()
    );
  };

  const validateName = () => {
    const regex = new RegExp('^[a-zA-Z ]*$');
    const result = regex.test(data.name);

    return result;
  };

  const validateNumber = () => {
    const regex = new RegExp('^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$');
    const result = regex.test(data.number);

    return result;
  };

  const validateMonth = () => {
    const regex = new RegExp('^[0-9]{2}$');
    const result = regex.test(data.month);

    return result;
  };

  const validateYear = () => {
    const regex = new RegExp('^[0-9]{2}$');
    const result = regex.test(data.year);

    return result;
  };

  const validateCvc = () => {
    const regex = new RegExp('^[0-9]{3}$');
    const result = regex.test(data.cvc);

    return result;
  };

  return (
    <main className='main-app'>
      <CardsBg
        name={data.name}
        number={data.number}
        month={data.month}
        year={data.year}
        cvc={data.cvc}
      />
      <div className='steps'>
        {showForm && (
          <ConfirmForm
            onFormSubmit={onConfirmFormSubmitHandler}
            onNameChange={onNameChangeHandler}
            onNumberChange={onNumberChangeHandler}
            onMonthChange={onMonthChangeHandler}
            onYearChange={onYearChangeHandler}
            onCvcChange={onCvcChangeHandler}
            name={data.name}
            number={data.number}
            month={data.month}
            year={data.year}
            cvc={data.cvc}
          />
        )}
        {!showForm && (
          <ThankYou onContinueClick={onThankYouContinueClickHandler} />
        )}
      </div>
    </main>
  );
}

export default App;
