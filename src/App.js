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
  const [errors, setErrors] = useState({
    number: {
      error: false,
      message: '',
    },
    name: {
      error: false,
      message: '',
    },
    month: {
      error: false,
      message: '',
    },
    year: {
      error: false,
      message: '',
    },
    cvc: {
      error: false,
      message: '',
    },
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
    if (data.name.trim().length === 0) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          name: {
            error: true,
            message: "Can't be blank",
          },
        };
      });

      return false;
    }

    const regex = new RegExp('^[a-zA-Z ]*$');
    const result = regex.test(data.name);

    if (!result) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          name: {
            error: true,
            message: 'Wrong format, alphacharacters and spaces only',
          },
        };
      });
    } else {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          name: {
            error: false,
            message: '',
          },
        };
      });
    }

    return result;
  };

  const validateNumber = () => {
    if (data.number.trim().length === 0) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          number: {
            error: true,
            message: "Can't be blank",
          },
        };
      });

      return false;
    }

    const regex = new RegExp('^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$');
    const result = regex.test(data.number);

    if (!result) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          number: {
            error: true,
            message: 'Wrong format, numbers only',
          },
        };
      });
    } else {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          number: {
            error: false,
            message: '',
          },
        };
      });
    }

    return result;
  };

  const validateMonth = () => {
    if (data.month.trim().length === 0) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          month: {
            error: true,
            message: "Can't be blank",
          },
        };
      });

      return false;
    }

    const regex = new RegExp('^[0-9]{2}$');
    const result = regex.test(data.month);

    if (!result) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          month: {
            error: true,
            message: 'Wrong format, two digits only',
          },
        };
      });
    } else {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          month: {
            error: false,
            message: '',
          },
        };
      });
    }

    return result;
  };

  const validateYear = () => {
    if (data.year.trim().length === 0) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          year: {
            error: true,
            message: "Can't be blank",
          },
        };
      });

      return false;
    }

    const regex = new RegExp('^[0-9]{2}$');
    const result = regex.test(data.year);

    if (!result) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          year: {
            error: true,
            message: 'Wrong format, two digits only',
          },
        };
      });
    } else {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          year: {
            error: false,
            message: '',
          },
        };
      });
    }

    return result;
  };

  const validateCvc = () => {
    if (data.cvc.trim().length === 0) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          cvc: {
            error: true,
            message: "Can't be blank",
          },
        };
      });

      return false;
    }

    const regex = new RegExp('^[0-9]{3}$');
    const result = regex.test(data.cvc);

    if (!result) {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          cvc: {
            error: true,
            message: 'Wrong format, three digits only',
          },
        };
      });
    } else {
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          cvc: {
            error: false,
            message: '',
          },
        };
      });
    }

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
            errors={errors}
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
