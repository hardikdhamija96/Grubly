import React, { useState } from "react";

const Search = ({ listOfRestaurants, setFilteredRestaurantList }) => {
  const [keyword, setKeyword] = useState("");
  const [] =useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = listOfRestaurants.filter((item) =>
      item.info.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredRestaurantList(val);

    setKeyword("");
  };

  return (
    <div>
      <form
        className="flex w-full justify-start m-auto pl-10 mb-10"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Restaurant keyword"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          className="mr-4 p-2 rounded-lg border-2 w-[40%]"
        />
        <button className="border-2 shadow-md px-2 py-1 rounded-md text-black hover:bg-slate-200 duration-100 ease-in-out active:scale-105 active:shadow-lg">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
