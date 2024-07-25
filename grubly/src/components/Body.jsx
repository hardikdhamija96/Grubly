import React from 'react'
import RestaurantContainer from './RestaurantContainer'
import Categories from './layout/categories/Categories'
import RestaurantContainerShimmer from './shimmer/RestaurantContainerShimmer'
import TopRestaurant from './layout/topRestaurant/TopRestaurant'

const Body = () => {
  return (
    <div className='w-full max-w-[60rem] m-auto bg-white'>
        {/* <h1>Find the best Food.. </h1> */}
        {/* <SearchTagsContainer /> */}
        <Categories/>
        <TopRestaurant />
        <RestaurantContainer />
    </div>
  )
}

export default Body