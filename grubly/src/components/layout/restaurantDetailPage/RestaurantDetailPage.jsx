import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const RestaurantDetailPage = () => {
  const [resDetails, setResDetails] = useState(null);

  const { resId } = useParams();
  //   console.log("resId:", resId)

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      `https://swiggyfoodserver.onrender.com/api/restaurants/restaurantDetail?lat=30.3131722&lng=76.38462179999999&resId=${resId}`
    );
    const jsonData = await data.json();
    const res = jsonData?.data?.cards[2]?.card?.card;

    setResDetails(res);
    // console.log(res);

    // console.log(jsonData);
  };

  if (!resDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[40rem] m-auto my-20">
      <h1 className="py-4 sm:text-2xl font-bold text-lg text-center sm:text-left">{resDetails.info.name}</h1>
      <div className="border-2 shadow-lg pt-6 pb-3 rounded-2xl mx-2 sm:mx-1">
        <div className="pl-6">
          <div className="flex gap-2 font-bold text-md">
            <span className="flex justify-start items-center gap-2">
            <Icon icon="el:star-alt" className="text-green-600 text-[1.05rem]" />
              {resDetails.info.avgRatingString} (
              {resDetails.info.totalRatingsString})
            </span>
            <span>&#8226; {resDetails.info.costForTwoMessage}</span>
          </div>
          <div className="text-orange-500 font-bold text-sm font-sans">
            {resDetails.info.cuisines.join(", ")}
          </div>
          <div className="pl-2 py-5 text-[0.95rem]">
            <div>
              &#8226; <span className="font-bold">Outlet</span>{" "}
              {resDetails.info.areaName}
            </div>
            <div>&#8226; {resDetails.info.sla.slaString.toLowerCase()}</div>
          </div>
        </div>
        <hr />
        <div className="pt-3 pl-2 flex gap-4 items-center" >
          <Icon  className="text-3xl text-gray-500 " icon="pepicons-pencil:motorcycle" />
          <h1 className="text-gray-500 font-normal text-sm sm:text-base">
          Order above 149 for discounted delivery fee
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
