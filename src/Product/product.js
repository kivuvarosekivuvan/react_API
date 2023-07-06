import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './product.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className="product-container">
      <h1 className="product-title">{product.title}</h1>
      <img src={product.image} alt="Product" className="product-image" />
      <p className="product-description">DESCRIPTION: {product.description}</p>
      <p className="product-price">KES {product.price}</p>

      <Link to="/">
        <button className="back-button">BACK</button>
      </Link>
    </div>
  );
};

export default Product;