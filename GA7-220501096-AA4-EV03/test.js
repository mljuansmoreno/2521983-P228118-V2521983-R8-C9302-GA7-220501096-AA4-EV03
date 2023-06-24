import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import { getProducts } from './api';

jest.mock('./api');

describe('ProductList', () => {
  test('renders product list correctly', async () => {
    const mockProducts = [
      { id: 1, name: 'Bike 1', price: 1000 },
      { id: 2, name: 'Bike 2', price: 2000 },
    ];
    getProducts.mockResolvedValue(mockProducts);

    const { getByText } = render(<ProductList />);

    // Verifica que se muestren los nombres de los productos
    expect(getByText('Bike 1')).toBeInTheDocument();
    expect(getByText('Bike 2')).toBeInTheDocument();

    // Resto de las pruebas que desees realizar en el componente ProductList
  });
});
