import React from 'react';

const DetallesdeProducto = ({ product, onAddToCart, onGoBack }) => {
  return (
    <div className="product-details">
      <div className="product-details__image-container">
        <img src={product.image} alt={product.name} className="product-details__image" />
      </div>
      <div className="product-details__info">
        <h2 className="product-details__name">{product.name}</h2>
        <p className="product-details__description">{product.description}</p>
        <p className="product-details__features">{product.features}</p>
        <p className="product-details__price">Precio: {product.price}</p>
        <button className="product-details__button" onClick={onAddToCart}>
          Agregar al carrito
        </button>
        <button className="product-details__button" onClick={onGoBack}>
          Volver a la lista de productos
        </button>
      </div>
    </div>
  );
};

export default DetallesdeProducto;
