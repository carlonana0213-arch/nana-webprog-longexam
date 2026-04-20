import Button from "../../components/Button";
import logo from "../../assets/img/nubdexchange_logo.png";
import bdex from "../../assets/img/Bdex.png";
import cap from "../../assets/img/nu_cap.png";
import shirt from "../../assets/img/nu-shirts.png";
import uniform from "../../assets/img/varjack.png";
import jug from "../../assets/img/jugppl.png";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-gradient-to-b from-blue-50/40 to-white">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img src={bdex} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 opacity-90" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-400">
            About Store
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            A campus shop focused on useful products and simple ordering.
          </h1>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            BulldogEx Shop keeps the low-fidelity layout system while presenting
            clear product categories, quick actions, and straightforward store
            information.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Button to="/" variant="secondary">
              Back Home
            </Button>
            <Button to="/products">Open Products</Button>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-blue-100 bg-blue-950 p-5">
            <p className="text-2xl font-bold text-white">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-100">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-blue-100 bg-blue-950 p-5">
            <p className="text-2xl font-bold text-white">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-100">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-blue-100 bg-blue-950 p-5">
            <p className="text-2xl font-bold text-white">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-100">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-blue-100 bg-blue-950 p-5">
            <p className="text-2xl font-bold text-white">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-100">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-900/50">
              Store Flow
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-blue-950 tracking-tight">
              Built for simple campus shopping
            </h2>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Curated Catalog",
                  desc: "Products are grouped by daily need so shoppers can scan faster.",
                },
                {
                  title: "Simple Checkout",
                  desc: "Product pages keep price, stock, and action buttons easy to find.",
                },
                {
                  title: "Pickup Ready",
                  desc: "Store information stays direct for students who need quick order updates.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-blue-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-blue-900/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CATEGORY GRID */}
          <div className="rounded-3xl border border-blue-900/10 bg-white p-6 shadow-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-900/50">
              Category Grid
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {[cap, shirt, uniform, jug].map((img, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200"
                >
                  <img
                    src={img}
                    alt=""
                    className="rounded-xl p-3 transition hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-6 w-full">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
