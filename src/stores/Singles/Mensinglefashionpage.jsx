

import React from "react";
import { menData } from "../data/men";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { UseCart } from "../context/Cartcontext";

function Mensinglepage() {
  const { id } = useParams();
  const product = menData[Number(id)];

  if (!product) {
    return <h2>Product not found</h2>;
  }
  const { addToCart, cartItems } = UseCart(); 
    if (!product) {
      return <h2>Product not found</h2>;
    }
  return (
    <>
    <Navbar/>
    <div className="indpage">
  <div className="int-img">
    <img src={product.image} alt={`${product.company} ${product.model}`} />
  </div>
  <div className="text-content">
    <div className="ind-model">
      <h3>{product.model}</h3>
    </div>
    <div className="int-price">{product.price}</div>
    <div className="ind-dis">{product.description}</div>
    <div><button onClick={() => addToCart(product)}>Add Cart</button></div>
  </div>
</div></>

  );
}

export default  Mensinglepage;
