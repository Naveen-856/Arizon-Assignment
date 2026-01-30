import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to MyStore
      </h1>

      <p className="text-gray-700 mb-6">
        A simple e-commerce application built using Next.js and Tailwind CSS.
        Browse products, view details, and manage your cart easily.
      </p>

      <Link
        href="/products"
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-700 transition"
      >
        Browse Products
      </Link>
    </main>
  );
}
