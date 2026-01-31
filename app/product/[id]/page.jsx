import AddToCartButton from "@/components/AddToCartButton";

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API error:", res.status, res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params; 
  const product = await getProduct(id);

  if (!product) {
    return (
      <main className="p-6 max-w-5xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-500">Unable to load product details. Please try again later.</p>
        </div>
      </main>
    );
  }

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
