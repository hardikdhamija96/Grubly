import React from 'react'
import CurrentDate from '../../CurrentDate'
import { Link } from 'react-router-dom'


const Header = () => {

  

  return (
    <div className='flex justify-between w-full items-center px-4 bg-red-950 text-red-100 h-24'>
        <div className='flex justify-between flex-row w-full '>
        <Link to={"/"}>
        <h1 className='text-2xl md:text-5xl font-semibold font-serif uppercase'>Grubly</h1>
        </Link>
        <h2 className='text-lg md:text-2xl font-semibold font-sans'>
          <CurrentDate />
        </h2>
        </div>
    </div>
  )
}

export default Header