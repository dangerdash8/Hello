import React, { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState({
    id: '',
    title: '',
    price: ''
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data[0]);
      const product = data[0]; // Assuming you want to display the first product from the API
      setItems({
        id: product.id,
        title: product.title,
        price: product.price
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>{items.id}</h1>
      <h1>{items.title}</h1>
      <h1>{items.price}</h1>
    </div>
  );
};

export default App;
