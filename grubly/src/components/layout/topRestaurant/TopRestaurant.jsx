import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TopRestaurantsShimmer from "../../shimmer/TopRestaurantsShimmer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const TopRestaurant = () => {
  const [topRestaurantsData, setTopRestaurantsData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://swiggyfoodserver.onrender.com/api/restaurants?lat=30.3131722&lng=76.38462179999999"
    );
    const jsonData = await data.json();
    const topRestaurant =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setTopRestaurantsData(topRestaurant);
  };

  if(topRestaurantsData.length === 0){
    return(
      <TopRestaurantsShimmer />
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };

  // console.log(Slider)

  return (
    <div>
      <div className="bg-white w-full m-auto px-10 py-14 border-b-8">
        <h1 className="sm:text-[1.4rem] text-base font-bold pb-8">
          Top restaurant chains in Patiala
        </h1>
        <div>
          
              <Slider {...settings}>
            {topRestaurantsData.map((item) => (
              <div
                className="w-68 md:w-80 px-3 h-32 md:h-40 text-[0.6rem] sm:text-base"
                key={item.info.id}>
                {/* <h1>{item.description}</h1> */}
                <Link to={"/restaurants/"+ item?.info?.id}>
                
                  
                  <img
                    className="object-cover object-center w-full h-full"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                    alt=""
                  />
                </Link>

                <p className="font-semibold">{item.info.name}</p>
                <div className="flex items-center gap-1 font-medium">
                <Icon icon="el:star-alt" className="text-green-600 text-[1.05rem]" />
                  <p className="text-sm">{item.info.avgRating}</p>
                  <p className="text-sm">&#x2022;{" "}{item.info.sla.slaString}</p>
                </div>
                <p className="text-[0.9rem] font-normal text-gray-700 ">
                  {item.info.cuisines.slice(0, 3).map((cuisine, index) => (
                    <span key={index}>
                      {cuisine}
                      {index < item.info.cuisines.slice(0, 3).length - 1 &&
                        ", "}
                    </span>
                  ))}
                  {item.info.cuisines.length > 2 && "  ..."}
                </p>
                <p className="text-gray-700 text-[0.9rem]">{item.info.areaName}</p>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    </div>
  );
};

export default TopRestaurant;
