import './MainButton.css';

const MainButton = ({ title }) => {
  return (
    <button type='submit' className='btn'>
      {title}
    </button>
  );
};

export default MainButton;
