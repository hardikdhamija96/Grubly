import React from "react";

const RestaurantCardShimmer = () => {
  return (
    <div className=" max-w-96 w-64 md:w-72 min-h-[500px] h-[500px]">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-red-950 dark:border-gray-700 h-full">
        <a href="#">
          <svg
            className="  text-gray-200 dark:text-gray-600 mx-4 my-8 md:mx-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </a>
        <div className="px-5 pb-5 animate-pulse pt-8">
          <a href="#" className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-400 w-40 mb-4"></div>
            <div className="h-4 w-8 bg-gray-200 rounded-full dark:bg-red-200 mb-4"></div>
          </a>

          <div className="flex flex-col items-center justify-left">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardShimmer;
