/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { cloudIcon, fogIcon, rainIcon, snowIcon, stromIcon, sunIcon, windIcon } from '../utils/Constant'

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloudIcon)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rainIcon)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sunIcon)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(stromIcon)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fogIcon)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snowIcon)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(windIcon)
      }
    }
  }, [iconString])
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard