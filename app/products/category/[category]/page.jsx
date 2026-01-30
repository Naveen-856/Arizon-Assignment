import ProductCard from "@/components/ProductCard";

async function getCategoryProducts(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  return res.json();
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const products = await getCategoryProducts(category);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
        {category.replace("%20", " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
