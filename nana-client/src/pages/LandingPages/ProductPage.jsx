import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import products from "../../assets/product-content.js";

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-blue-950">
              Product not found
            </h1>
            <Button to="/products" className="mt-6">
              Back to Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">
      {/* MAIN */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* BACK */}
          <div className="mb-8">
            <Button
              to="/products"
              className="text-sm text-blue-900/60 hover:text-blue-950"
            >
              ← Back to Products
            </Button>
          </div>

          {/* GRID */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* LEFT: IMAGE */}
            <div className="space-y-4">
              <div className="relative rounded-3xl bg-white p-6 shadow-sm border border-blue-900/10">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-500 hover:scale-105"
                  />
                </div>

                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/20 to-transparent" />
              </div>
            </div>

            {/* RIGHT: INFO */}
            <div className="flex flex-col gap-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-400">
                {product.category}
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl  text-yellow-400">
                  {product.price}
                </span>

                <span
                  className={`text-sm font-medium ${
                    product.stock === "Low stock"
                      ? "text-red-500"
                      : product.stock === "Preorder"
                        ? "text-yellow-500"
                        : "text-blue-900/60"
                  }`}
                >
                  {product.stock}
                </span>
              </div>

              <div className="h-px bg-blue-900/10" />

              <div className="space-y-4 text-blue-900/80">
                {product.content.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="w-full sm:w-auto px-6 y-3 ">
                    Add to Cart
                  </Button>

                  <Button
                    to="/products"
                    className="w-full sm:w-auto border border-blue-900/20 bg-white text-blue-950 hover:bg-blue-50"
                  >
                    Back
                  </Button>
                </div>

                {/* INFO TEXT */}
                <p className="mt-3 text-xs text-blue-900/50">
                  Orders are processed within the day. Pickup details will be
                  provided after checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
