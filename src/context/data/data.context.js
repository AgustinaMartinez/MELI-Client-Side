import { useContext } from 'react';
import AppContext from '../index';

const useData = () => {
  const [storage, setStorage] = useContext(AppContext);

  const setData = (data) => {
    setStorage(
      (prevState) => (
        {...prevState, data}
      )
    );
  }

  return {
    data: storage.data,
    setData,
  }
}

export default useData;
