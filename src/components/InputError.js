import './InputError.css';

const InputError = ({ error }) => {
  return error.error && <p className='error'>{error.message}</p>;
};

export default InputError;
