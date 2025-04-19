import React from "react";
import { speakerData } from "../data/speaker";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { UseCart } from "../context/Cartcontext";

function SpeakerSinglePage() {
  const { id } = useParams();
  const product = speakerData[Number(id)];

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
        <img src={product.image} alt={`${product.company} speaker`} />
      </div>
      <div className="text-content">
        <div className="ind-model">
          <h3>{product.model}</h3>
        </div>
        <div className="int-price">{product.price}</div>
        <div className="ind-dis">{product.description}</div>
        <div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div></>
  );
}

export default SpeakerSinglePage;
