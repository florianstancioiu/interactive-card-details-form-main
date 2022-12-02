import { useState } from 'react';

import CardsBg from './components/CardsBg';
import ConfirmForm from './components/ConfirmForm';
import ThankYou from './components/ThankYou';

import './App.css';

function App() {
  const [data, setData] = useState({
    number: '0000 0000 0000 0000',
    name: 'Jane Appleseeed',
    month: 0,
    year: 0,
    cvc: 0,
  });

  return (
    <>
      <CardsBg
        number={data.number}
        name={data.name}
        month={data.month}
        year={data.year}
        cvc={data.cvc}
      />
      {/*
      <ConfirmForm />
      */}
      <ThankYou />
    </>
  );
}

export default App;
