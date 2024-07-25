import React from "react";
// import RES_DATA from "../Utils/RES_DATA"

const RestaurantCards = ({ name, locality, costForTwo, avgRating, imgURL }) => {
  // console.log(props);
  // console.log(obj.res_name);

  let img_src = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgURL}`;

  return (
    <div className="max-w-96 w-60 md:w-72  md:h-[500px]">
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-red-950 dark:border-gray-700 h-full">
        
          <img className="m-auto py-8 px-4 md:px-6 rounded-t-lg md:w-[300px] md:h-[300px] h-[320px] object-cover object-center" src={img_src} alt={name} />
        
        <div className="px-5 pb-5">
          <div  className="flex justify-between items-center">
            <h5 className="md:text-xl text-lg font-semibold tracking-tight text-gray-900 dark:text-white pr-3">
              {name}
            </h5>
            
            <h5 className="bg-red-200 text-red-900 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 ms-3">
              {avgRating}
            </h5>
          </div>
          <h5 className="md:text-xl text-sm font-extralight tracking-tight text-gray-900 dark:text-white pr-3">
              {locality}
            </h5>

          <div className="flex items-center mt-2.5 mb-5"></div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {costForTwo}
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCards;
