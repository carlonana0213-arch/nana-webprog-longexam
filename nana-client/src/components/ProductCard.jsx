import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-blue-900/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-400">
            No Image
          </div>
        )}

        <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-400 shadow-sm">
          {product.category}
        </div>

        <div className="absolute inset-0 flex items-end justify-center bg-blue-950/0 opacity-0 transition duration-300 group-hover:bg-blue-950/10 group-hover:opacity-100">
          <div className="mb-4 w-[85%]">
            <Button
              variant="secondary"
              to={`/products/${product.name}`}
              className="w-full justify-center"
            >
              View Product
            </Button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2 bg-blue-950">
        {/* TITLE */}
        <h3 className="text-base font-semibold text-white leading-snug group-hover:text-yellow-400 transition">
          {product.title}
        </h3>

        {/* PRICE + STOCK */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-yellow-400 group-hover:text-white transition">
            {product.price}
          </p>

          <span className="text-xs text-white">{product.stock}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm leading-6 text-zinc-200 line-clamp-2">
          {product.content[0]}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
