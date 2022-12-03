import './MainButton.css';

const MainButton = ({ title, onClickCustom }) => {
  return (
    <button onClick={onClickCustom} type='submit' className='btn'>
      {title}
    </button>
  );
};

export default MainButton;
