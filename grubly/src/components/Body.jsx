import React from 'react'
import RestaurantContainer from './RestaurantContainer'
import Categories from './layout/categories/Categories'
import RestaurantContainerShimmer from './shimmer/RestaurantContainerShimmer'
import TopRestaurant from './layout/topRestaurant/TopRestaurant'
import CategoriesShimmer from './shimmer/CategoriesShimmer'
import TopRestaurantsShimmer from './shimmer/TopRestaurantsShimmer'

const Body = () => {
  return (
    <div className='w-full max-w-[60rem] m-auto bg-white'>
        <Categories/>
        <TopRestaurant />
        <RestaurantContainer />
    </div>
  )
}

export default Body