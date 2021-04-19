import './_productDetail.scss';

const ProductDetail = props => {
  const {
    alt,
    src,
    condition,
    sold_quantity,
    title,
    price,
    decimal,
    onClick,
    description,
  } = props;

  return (
    <div className="product">
      <div className="product__left">
        <img alt={alt} src={src} className="product__left__image"/>
        <div className="product__left__detail">
          <h3 className="product__left__detail__title">Descripción del producto</h3>
          <p className="product__left__detail__description">{description}</p>
        </div>
      </div>
      <div className="product__right">
        <span className="product__right__description">{condition} - {sold_quantity} vendidos</span>
        <h3 className="product__right__title">{title}</h3>
        <div className="product__right__price">
          <p className="product__right__price__int">{price}</p>
          <span className="product__right__price__decimal">{decimal}</span>
        </div>
        <button className="product__right__button" onClick={onClick}>Comprar</button>
      </div>
    </div>
  );
}

export default ProductDetail;
