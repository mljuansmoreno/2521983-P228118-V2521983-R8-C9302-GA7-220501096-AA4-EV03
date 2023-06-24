import React from 'react';

const ListadeProductos = ({ products }) => {
  return (
    <div className="product-list">
      <h2 className="product-list__title">Productos disponibles</h2>
      {products.map((product) => (
        <div key={product.id} className="product-list__item">
          <img src={product.image} alt={product.name} className="product-list__image" />
          <h3 className="product-list__name">{product.name}</h3>
          <p className="product-list__price">Precio: {product.price}</p>
          <button className="product-list__button">Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ListadeProductos;
