import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3131722&lng=76.38462179999999"
    );
    const jsonData = await data.json();
    const categories =
      jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    setCategoriesData(categories);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows:false
  };

  return (
    <div className="bg-white w-full m-auto px-10 py-14 border-b-8 ">
      <h1 className="text-[1.4rem] font-bold">What's on yor Mind?</h1>
      <div >
        <Slider {...settings}>
          {categoriesData.map((item) => (
            <div className="w-48" key={item.id}>
              {/* <h1>{item.description}</h1> */}
              <a href={item.action.link} target="_blank">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
