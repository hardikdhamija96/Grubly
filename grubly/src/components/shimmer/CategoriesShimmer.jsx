import React from "react";
import shimmerImage from "../../assets/shimmerImage.jpg";

const CategoriesShimmer = () => {
  return (
    <div className="bg-white w-full m-auto px-10 py-14 border-b-8 ">
      <h1 className="text-[1.4rem] font-bold">What's on your Mind?</h1>
      <div className="flex gap1 animate-pulse">
        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>

        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>
        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>
        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>
        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>
        <div className="w-1/6 py-4">
          <img className=" p-2" src={shimmerImage} alt="" />
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mx-auto mb-2.5"></div>
        </div>
        
   
      </div>
    </div>
  );
};

export default CategoriesShimmer;
