import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar acciones con los datos del formulario, como enviarlos al backend o realizar algún proceso adicional
    console.log(formData);
    // Resetear el formulario
    setFormData({
      name: '',
      address: '',
      paymentMethod: '',
    });
  };

  return (
    <div className="checkout">
      <h2 className="checkout__title">Proceso de pago presencial</h2>
      <form className="checkout__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="paymentMethod">Método de pago:</label>
        <input
          type="text"
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        />

        <button type="submit" className="checkout__button">
          Confirmar pago
        </button>
      </form>
    </div>
  );
};

export default Checkout;
