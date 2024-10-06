import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import '../index.css'
import { cloudIcon, fogIcon, rainIcon, snowIcon, stromIcon, sunIcon, windIcon } from '../utils/Constant'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sunIcon)
  const { time } = useDate()

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
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center' >{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCard