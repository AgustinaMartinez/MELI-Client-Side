import { useContext } from 'react';
import AppContext from '../index';

const useInput = () => {
  const [storage, setStorage] = useContext(AppContext);

  const setInput = (input) => {
    setStorage(
      (prevState) => (
        {...prevState, input}
      )
    );
  }

  return {
    input: storage.input,
    setInput,
  }
}

export default useInput;
