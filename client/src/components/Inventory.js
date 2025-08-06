import React, { useEffect, useState } from "react";
import { getInventory } from "../service";
import Cart from "./Cart";



export const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getInventoryList = async () => {
      const inventories = await getInventory();
      setItems(inventories);
    };
    getInventoryList();
  }, []);

  const handleAddToCart = (item) => {
    // set quantity
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
  };

  return (
    <>
      <table>
        <tr>
          <th>name</th>
          <th>unit price</th>
          <th>quantity</th>
        </tr>
        {/* map inventory */}
        {items &&
          items.map(({ name, unitPrice, quantity }, key) => {
            return (
              <tr>
                <td key={key}>{name}</td>
                <td key={key}>{unitPrice}</td>
                <td key={key}>{quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      handleAddToCart({ name, unitPrice });
                    }}
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
      <h1>My Cart</h1>
      {cartItems.map(({ name, quantity }) => {
        return (
          <Cart
            name={name}
            quantity={quantity}
            removeFromCart={(name) => {
              handleRemoveFromCart(name);
            }}
          />
        );
      })}
    </>
  );
};
