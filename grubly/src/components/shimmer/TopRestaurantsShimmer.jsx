import React from "react";
import shimmerImage from "../../assets/shimmerImage.jpg";

const TopRestaurantsShimmer = () => {
  return (
    <div className="bg-white w-full m-auto px-10 py-14 border-b-8 ">
      <h1 className="text-[1.4rem] font-bold">
        Top restaurant chains in Patiala
      </h1>
      <div className="flex gap1 animate-pulse">
        <div className="w-1/3 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5 mb-2.5 ml-2"></div>
        </div>

        <div className="w-1/3 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5 mb-2.5 ml-2"></div>
        </div>

        <div className="w-1/3 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5 ml-2"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 mb-2.5 ml-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5 mb-2.5 ml-2"></div>
        </div>

        
      </div>
    </div>
  );
};

export default TopRestaurantsShimmer;
