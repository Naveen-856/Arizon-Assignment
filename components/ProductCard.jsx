"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ProductCard = ({ product }) => {
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
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition p-4 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h2 className="text-sm font-medium text-black line-clamp-2 mt-2">
          {product.title}
        </h2>
      </Link>

      <p className="mt-2 font-semibold text-black">${product.price}</p>

      <button
        onClick={addToCart}
        className="bg-black text-white py-2 rounded hover:bg-white hover:text-black hover:border hover:border-black transition cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
