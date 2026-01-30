import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params; 
  const product = await getProduct(id);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain border rounded-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-black">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-xl font-semibold mb-6 text-black">
            ${product.price}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
}
