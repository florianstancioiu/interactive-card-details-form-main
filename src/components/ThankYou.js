import IconComplete from '../images/icon-complete.svg';
import MainButton from './MainButton';

import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className='thank-you'>
      <img className='icon-complete' src={IconComplete} alt='' />
      <h1>Thank you!</h1>
      <p>We've added your card details</p>
      <MainButton title='Continue' />
    </div>
  );
};

export default ThankYou;
