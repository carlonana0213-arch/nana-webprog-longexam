import Button from "../../components/Button.jsx";
import ProductList from "../../components/ProductList.jsx";
import products from "../../assets/product-content.js";

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                Your one stop shop for all campus essentials
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-yellow-700 sm:text-base">
                Browse practical items for class, study, commute, and everyday
                campus routines.
              </p>
            </div>

            <div>
              <Button
                to="/"
                variant="primary"
                className="border border-blue-900/20"
              >
                Back Home
              </Button>
            </div>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {["All", "Collectible", "Tech", "Apparel", "Accessories"].map(
              (cat) => (
                <button
                  key={cat}
                  className="rounded-full border border-blue-900/20 px-4 py-1.5 text-sm text-blue-900/70 hover:bg-blue-50 hover:text-blue-950 transition"
                >
                  {cat}
                </button>
              ),
            )}
          </div>
          <div className="mt-6 h-px w-full bg-blue-900/10" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-2">
            <p></p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950 tracking-tight">
                Product card grid
              </h2>

              {/* Optional future filter placeholder */}
              <div className="text-sm text-blue-900/60">11 items available</div>
            </div>
          </div>

          {/* Product List */}
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
