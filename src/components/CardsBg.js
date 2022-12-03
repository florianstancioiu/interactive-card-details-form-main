import bgCardBack from '../images/bg-card-back.png';
import bgCardFront from '../images/bg-card-front.png';
import cardLogo from '../images/card-logo.svg';

import './CardsBg.css';

const CardsBg = ({ cvc, name, number, month, year }) => {
  return (
    <div className='cards-bg'>
      <div className='cards-bg-inner'>
        <div className='card-back-wrapper'>
          <img className='card-back-img' src={bgCardBack} alt='Card Back' />
          <p className='card-cvc'>{cvc}</p>
        </div>
        <div className='card-front-wrapper'>
          <img className='card-front' src={bgCardFront} alt='Card Front' />
          <img className='card-logo' src={cardLogo} alt='' />
          <p className='card-number'>{number}</p>
          <p className='card-name'>{name}</p>
          <p className='card-date'>
            {month}/{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsBg;
