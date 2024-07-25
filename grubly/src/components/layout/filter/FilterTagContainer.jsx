import React from "react";
import FilterTag from "./FilterTag";
import { SEARCH_TAGS } from "../../../Utils/constants";

const FilterTagContainer = ({
  allRestaurants,
  isRating4Plus,
  isVeg,
  isUnder300,
  isBetween300and600,
}) => {
  return (
    <div className="flex flex-wrap justify-left gap-3 pl-12 py-10">
      <FilterTag value="All Restaurants" onClickHandler={allRestaurants} />
      <FilterTag value="Rating 4.0+" onClickHandler={isRating4Plus} />
      <FilterTag value="Pure Veg" onClickHandler={isVeg} />
      <FilterTag value="Less than Rs. 300" onClickHandler={isUnder300} />
      <FilterTag value="Rs. 300- Rs. 600" onClickHandler={isBetween300and600} />
    </div>
  );
};

export default FilterTagContainer;
