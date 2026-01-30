"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Your cart is empty
        </h1>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
          />
        ))}
      </div>

      {/*CART SUMMARY */}
      <div className="mt-8 flex justify-end">
        <div className="border border-gray-200 rounded-lg p-4 w-full sm:w-72 bg-white shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Cart Summary
          </h2>

          <p className="flex justify-between text-gray-700">
            <span>Total</span>
            <span className="font-bold text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
