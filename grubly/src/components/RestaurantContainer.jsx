import RestaurantCards from "./RestaurantCards";
import React, { useEffect, useState } from "react";
import RES_DATA from "../Utils/RES_DATA";
import RestaurantContainerShimmer from "./shimmer/RestaurantContainerShimmer";
import FilterTagContainer from "./layout/filter/FilterTagContainer";
import Search from "./layout/search/Search";
import { Link } from "react-router-dom";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(listOfRestaurants);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://swiggyfoodserver.onrender.com/api/restaurants?lat=30.3131722&lng=76.38462179999999"
    );

    const jsonData = await data.json();
    const resList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(resList);
    setFilteredRestaurantList(resList);

    // console.log(resList)
  };

  const allRestaurants = () => {
    setFilteredRestaurantList(listOfRestaurants);
  };

  const isRating4Plus = () => {
    // console.log("function is4+ called")

    const val = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurantList(val);
  };

  const isVeg = () => {
    // console.log("function isVeg called")

    const val = listOfRestaurants.filter((item) => item.info.veg);
    setFilteredRestaurantList(val);
  };

  const isUnder300 = () => {
    // console.log("function isunder300 called")
    setFilteredRestaurantList(
      listOfRestaurants.filter(
        (obj) => parseInt(obj.info.costForTwo.slice(1, 4)) < 300
      )
    );
  };

  const isBetween300and600 = () => {
    // console.log("function isBW300-600 called")
    setFilteredRestaurantList(
      listOfRestaurants.filter((obj) => {
        const cost = parseInt(obj.info.costForTwo.slice(1, 4));
        return cost >= 300 && cost <= 600;
      })
    );
  };

  return (
    <div>
      <h1 className="text-base sm:text-[1.5rem] font-bold pl-[3.05rem] pt-10">
        Restaurants with online food delivery in Patiala
      </h1>
      <FilterTagContainer
        allRestaurants={allRestaurants}
        isRating4Plus={isRating4Plus}
        isVeg={isVeg}
        isUnder300={isUnder300}
        isBetween300and600={isBetween300and600}
      />
      <Search
      setFilteredRestaurantList = {setFilteredRestaurantList}

      listOfRestaurants = {listOfRestaurants}
      />
      <div className="">
        {listOfRestaurants.length === 0 || listOfRestaurants === undefined ? (
          <RestaurantContainerShimmer />
        ) : (
          <div className="flex flex-wrap justify-start md:gap-4 p-8 ml-11 md:m-0 gap-6">
            {filteredRestaurantList.map((obj) => (
              <Link to={"/restaurants/"+ obj?.info?.id} key={obj?.info?.id}>
                <RestaurantCards
                name={obj?.info?.name}
                locality={obj?.info?.locality}
                costForTwo={obj?.info?.costForTwo}
                avgRating={obj?.info?.avgRatingString}
                imgURL={obj?.info?.cloudinaryImageId}
              />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
