import React from "react";
import { useParams } from "react-router-dom";
import { fridgeData } from "../data/fridge";
import { UseCart } from "../context/Cartcontext";
import Navbar from "../components/navbar";

function Fridgesinglepage() {
  const { id } = useParams();
  const product = fridgeData[Number(id)]; // This is key ✅
  const { addToCart } = UseCart();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="indpage">
        <div className="int-img">
          <img src={product.image} alt={`${product.brand} ${product.model}`} />
        </div>
        <div className="text-content">
          <div className="ind-model">
            <h3>{product.brand} - {product.model}</h3>
          </div>
          <div className="int-price">{product.price}</div>
          <div className="ind-dis">{product.description}</div>
          <div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fridgesinglepage;
