"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const [open, setOpen] = useState(false);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="bg-white text-gray-900 shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
                MyStore
            </Link>

            {/* Mega Menu */}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="font-medium hover:text-blue-600"
                >
                    Products
                </button>

                {open && (
                    <div className="absolute top-10 left-0 bg-white border shadow-lg rounded w-48">
                        <Link
                            href="/products"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            All Products
                        </Link>

                        <Link
                            href="/products/category/electronics"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Electronics
                        </Link>

                        <Link
                            href="/products/category/jewelery"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Jewellery
                        </Link>

                        <Link
                            href="/products/category/men's clothing"
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Clothing
                        </Link>
                    </div>


                )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative font-medium">
                <div className="flex items-center gap-1">
                    <FaCartPlus className="mr-0" /> Cart
                
                {totalItems > 0 && (
                    <span className="ml-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {totalItems}
                    </span>
                )}
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
