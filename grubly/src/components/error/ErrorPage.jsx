import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const err = useRouteError();
    // console.log("err :",err);

  return (
    <section className="bg-white dark:bg-red-950 h-full flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-white">
            {err.status}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {err.data}.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page.
             You'll find lots to explore on the
            home page.{" "}
          </p>

          <Link to={"/"} className="inline-flex text-red-950 bg-red-100 hover:bg-red-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
          Back to Homepage
          </Link>
            
          
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
