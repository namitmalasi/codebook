import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useTitle } from "../hooks/useTitle";

export function PageNotFound() {
  useTitle("Page not found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white text-center">
            404, Oops!
          </p>
          <div className="max-w-xs">
            <img className="" src={Logo} alt="CodeBook page not found" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="w-64 text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
