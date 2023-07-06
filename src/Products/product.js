import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 className="title">All Products</h1>
      <div className="products-container">
        {products.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.images} alt={item.title} className="product-image" />
            <h2 className="product-title">{item.title}</h2>
            <h3 className="product-price">KES {item.price}</h3>
            <h3 className="product-discount">{item.discountPercentage}</h3>
            <button className="add-button" onClick={() => navigate(`/newproduct/${item.id}`)}>ADD PRODUCT</button>
            <button className="view-button" onClick={() => navigate(`/product/${item.id}`)}>VIEW PRODUCT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;