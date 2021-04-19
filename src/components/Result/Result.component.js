import { useState, useEffect } from 'react';
import './_result.scss';

const Result = props => {
  const [isShown, setIsShown] = useState(false);

  const {
    alt,
    image,
    price,
    title,
    condition,
    onClick,
  } = props;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth > 425 ? setIsShown(true) : setIsShown(false);
  }, []);

  return (
    <button className="resultCard" onClick={onClick}>
      <div className="resultCard__container">
        <img alt={alt} src={image} className="resultCard__container__photo"/>
        <div className="resultCard__container__details">
          <span className="resultCard__container__details__price">{price}</span>
          <p className="resultCard__container__details__description">{title}</p>
          <span>{condition}</span>
        </div>
      </div>
      {isShown ? <span className="resultCard__location">Córdoba</span> : null}
    </button>
  );
}

export default Result;
