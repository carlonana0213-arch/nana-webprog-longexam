import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import shirts from "../../assets/img/nu-shirts.png";
import jug from "../../assets/img/jugppl.png";
import pen from "../../assets/img/nu-pen.png";
const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-white">
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
              Campus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
              Welcome to BulldogEx Shop
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
              Explore campus uniforms, student essentials, and school merch in
              one quick storefront.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-950">
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

      <section className=" bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-bold text-blue-900">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="group relative overflow-hidden rounded-3xl">
            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={jug}
                alt="Daily Essentials"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-900 shadow-sm">
                Essentials
              </div>
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold tracking-tight">
                  Daily Essentials
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Bags, tumblers, lanyards, and everyday items.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 bg-blue-950/40">
                <Button
                  to="/products"
                  variant="secondary"
                  className="px-6 py-3"
                >
                  Shop Supplies
                </Button>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src={pen}
                alt="Study Supplies"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-900 shadow-sm">
                Study
              </div>
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold tracking-tight">
                  Study Supplies
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Notes, desk tools, and study kits for class and review weeks.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 bg-blue-950/40">
                <Button
                  to="/products"
                  variant="secondary"
                  className="px-6 py-3"
                >
                  Shop Supplies
                </Button>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl">
            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={shirts}
                alt="Campus Apparel"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-900 shadow-sm">
                Apparel
              </div>
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold tracking-tight">
                  Campus Apparel
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Comfortable pieces for class days, commute days, and weekends.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 bg-blue-950/40">
                <Button
                  to="/products"
                  variant="secondary"
                  className="px-6 py-3"
                >
                  View Apparel
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
