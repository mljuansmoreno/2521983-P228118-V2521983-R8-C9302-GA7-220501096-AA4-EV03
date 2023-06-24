import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // Reemplaza con la URL base de tu API

// Obtener la lista de productos
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};

// Obtener los detalles de un producto por su ID
export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los detalles del producto:', error);
    throw error;
  }
};

// Enviar los detalles del formulario de contacto
export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error al enviar el formulario de contacto:', error);
    throw error;
  }
};

// Agregar un producto al carrito de compras
export const addToCart = async (productId, quantity) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart`, {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error('Error al agregar el producto al carrito de compras:', error);
    throw error;
  }
};

// Realizar el pago y procesar la compra
export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/checkout`, paymentData);
    return response.data;
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    throw error;
  }
};
