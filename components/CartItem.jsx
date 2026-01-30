"use client";

import { RiDeleteBin6Fill } from "react-icons/ri";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-md hover:shadow-lg transition flex-wrap cursor-pointer">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain shrink-0"
      />

      <div className="flex-1">
        <h2 className="font-medium text-gray-900">{item.title}</h2>
        <p className="font-semibold text-gray-900">${item.price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="text-gray-900 px-2 border rounded hover:bg-gray-100 cursor-pointer"
        >
          -
        </button>
        <span className="text-gray-900">{item.quantity}</span>
        <button
          onClick={() => increaseQty(item.id)}
          className="text-gray-900 px-2 border rounded hover:bg-gray-100 cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-400 text-lg cursor-pointer"
        aria-label="Remove item"
      >
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}
