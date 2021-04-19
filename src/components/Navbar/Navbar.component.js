import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useInput from '../../context/input/input.context';
import useData from '../../context/data/data.context';
import { getData } from '../../services';
import './_navbar.scss';

const Navbar = ({ link, icon }) => {
  const { setData } = useData();
  const { setInput } = useInput();
  const [value, setValue] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleOnCHange = e => {
    setValue(e.target.value);
    setInput(e.target.value);
  }

  const handleOnClick = async () => {
    try{
      const res = await getData(value);
      setData(res);
      redirect === false ? setRedirect(true) : setRedirect(false);
    } catch (err){
      console.log('Error al hacer la búsqueda: ', err);
    }
  }

  const handleKeyDown = async e => {
    if (e.key === "Enter") {
      try{
        const res = await getData(value);
        setData(res);
        setRedirect(true);
      } catch (err){
        console.log('Error al hacer la búsqueda: ', err);
        setRedirect(false);
      }
    }
  }

  return (
    <nav className="navbar">
      <Link to={link}><img alt="logo" src="/assets/logo.svg" className="navbar__logo"/></Link>
      <div className="navbar__container">
        <input
          placeholder="Nunca dejes de buscar"
          className="navbar__container__input"
          value={value}
          onChange={handleOnCHange}
          onKeyDown={handleKeyDown}
        />
        <button className="navbar__container__button" aria-label="search button" onClick={handleOnClick}>{icon}</button>
        {redirect && <Redirect to={`/items?q=${value}`}/>}
      </div>
    </nav>
  );
}

export default Navbar;
