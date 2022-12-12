import React, { useState, useEffect } from 'react';
import { ListProducts } from '../component';

function ProductBoard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ListProducts data={products}/>
    </div>
  );
}
export default ProductBoard;
