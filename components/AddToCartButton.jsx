"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const AddToCartButton = ({ product }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-black text-white px-6 py-3 rounded hover:bg-white hover:text-black hover:border hover:border-black transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
