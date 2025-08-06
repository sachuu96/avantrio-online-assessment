import React from "react";

const Cart = ({ name, quantity, removeFromCart }) => {
  return (
    <>
      <p>{name}</p>
      <p>{quantity}</p>
      <button
        onClick={() => {
          removeFromCart(name);
        }}
      >
        Remove from cart
      </button>
    </>
  );
};

export default Cart;
