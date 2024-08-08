import React from 'react'
import RestaurantCardShimmer from './RestaurantCardShimmer'

const RestaurantContainerShimmer = () => {
  return (
    <div className='flex flex-wrap justify-start py-8 gap-6 md:gap-4 ml-20 md:m-0'>
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
    </div>
  )
}

export default RestaurantContainerShimmer