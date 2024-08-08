import React from 'react'



const FilterTag = ( {value,onClickHandler} ) => {

  

  return (
    <button className='border-2 shadow-md px-2 py-1 rounded-md text-black hover:bg-slate-200 duration-100 ease-in-out active:scale-105 active:shadow-lg text-[0.6rem] sm:text-base' onClick={onClickHandler}>{value}</button>
  )
}

export default FilterTag