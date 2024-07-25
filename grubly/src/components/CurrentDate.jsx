import React, { useEffect, useState } from 'react'

const CurrentDate = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDate(new Date());
        }, 1000);

        return  () => {
            clearInterval(interval);
        };

    },[])

  return (
    <div>{currentDate.toLocaleString()}</div>
  )
}

export default CurrentDate