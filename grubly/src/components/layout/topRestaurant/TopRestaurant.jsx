import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TopRestaurant = () => {
  const [topRestaurantsData, setTopRestaurantsData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3131722&lng=76.38462179999999"
    );
    const jsonData = await data.json();
    const topRestaurant =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setTopRestaurantsData(topRestaurant);
  };

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
        <h1 className="text-[1.4rem] font-bold pb-8">
          Top restaurant chains in Patiala
        </h1>
        <div>
          <Slider {...settings}>
            {topRestaurantsData.map((item) => (
              <div
                className="w-68 md:w-80 px-3 h-32 md:h-40"
                key={item.info.id}>
                {/* <h1>{item.description}</h1> */}
                <a
                  href="#"
                  target="_blank"
                  className="w-full h-full">
                  
                  <img
                    className="object-cover object-center w-full h-full"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                    alt=""
                  />
                </a>

                <p>{item.info.name}</p>
                <div>
                  <p>{item.info.avgRating}</p>
                  <p>{item.info.sla.slaString}</p>
                </div>
                <p>
                  {item.info.cuisines.slice(0, 3).map((cuisine, index) => (
                    <span key={index}>
                      {cuisine}
                      {index < item.info.cuisines.slice(0, 3).length - 1 &&
                        ", "}
                    </span>
                  ))}
                  {item.info.cuisines.length > 2 && "  ..."}
                </p>
                <p>{item.info.areaName}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurant;
