import React, { useState } from 'react';

const Carrito = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h2 className="cart__title">Carrito de compras</h2>
      {items.length === 0 ? (
        <p className="cart__empty">El carrito está vacío</p>
      ) : (
        <div className="cart__items">
          {items.map((item) => (
            <div key={item.id} className="cart__item">
              <img src={item.image} alt={item.name} className="cart__item-image" />
              <div className="cart__item-info">
                <h3 className="cart__item-name">{item.name}</h3>
                <p className="cart__item-price">Precio: {item.price}</p>
                <div className="cart__item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </div>
                <button className="cart__item-remove" onClick={() => handleRemoveItem(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="cart__total">
            <p>Total: {calculateTotal()}</p>
            <button className="cart__checkout">Finalizar compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
