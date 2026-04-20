import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔧 replace this later with real auth logic
    console.log("Logged out");

    // Example redirect
    navigate("/");
  };

  return (
    <footer className="border-t border-blue-900/30 bg-blue-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* BRAND */}
        <div>
          <p className="text-lg font-bold text-yellow-400">BulldogEx Shop</p>
          <p className="mt-2 text-blue-100">
            Campus essentials, simple ordering for everyday student life.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <p className="font-semibold text-white">Shop</p>
          <ul className="mt-3 space-y-2 text-blue-100">
            <li>
              <Link to="/products" className="hover:text-yellow-400">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-400">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Account</p>
          <ul className="mt-3 space-y-2 text-blue-100">
            <li>
              <Link to="/auth/signin" className="hover:text-yellow-400">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/auth/signup" className="hover:text-yellow-400">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/auth/signin" className="hover:text-red-400">
                Log Out
              </Link>
            </li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <p className="font-semibold text-white">Info</p>
          <ul className="mt-3 space-y-2 text-blue-100">
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <span className="text-blue-100/70">Pickup Details</span>
            </li>
            <li>
              <span className="text-blue-100/70">Campus Location</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-blue-900/30 pt-6 text-center text-xs text-blue-100/60">
        © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
