import React from "react";
import { UseCart } from "./context/Cartcontext";
import Navbar from "./components/navbar";

function UserCart() {
  const { cartItems, addToCart, removeFromCart } = UseCart();

  return (
    <>
      <Navbar />
      <div>
        {cartItems.length === 0 ? (
          <h2 style={{ textAlign: "center", marginTop: "5rem" ,fontSize:"5rem"}}>🛒 No items in cart</h2>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-section" key={index}>
              <div className="cart-img">
                <img src={item.image} alt={item.product} />
              </div>
              <div className="cart-details">
                <h3>{item.product}</h3>
                <h2>${item.price}</h2>
                <h3>{item.model}</h3>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default UserCart;
