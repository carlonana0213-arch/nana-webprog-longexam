import { Outlet } from "react-router-dom";
import bdex from "../assets/img/Bdex.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:flex items-center justify-center px-12 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src={bdex} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-950/90" />
          <div className="absolute -top-20 -left-20 h-72 w-72 bg-blue-700/20 blur-3xl rounded-full" />
          <div className="relative max-w-md text-left">
            {" "}
            <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-400">
              BulldogEx
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Campus essentials, simplified.
            </h2>
            <p className="mt-4 text-blue-100 leading-7">
              Shop curated items for everyday student life. Fast checkout, easy
              pickup, and everything you need in one place.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
