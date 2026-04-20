import Button from "../components/Button";
import confused from "../assets/img/notfound.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <p className="mb-3 text-[20px] font-semibold uppercase tracking-[0.28em] text-zinc-900">
          Error 404
        </p>

        <div className="flex items-center justify-center gap-4">
          <img src={confused} alt="confused" className="size-100" />
        </div>

        <p className="mt-4 text-lg leading-7 text-zinc-600">
          Page not found. The page you're looking for doesn't exist or has been
          moved.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button to="/">Back Home</Button>
          <Button to="/products">View Products</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
