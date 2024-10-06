import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import { clear, cloud, fog, rain, snow, thunder } from '../utils/Constant'

  
const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState('https://github.com/myprojectideas/Weather_application/blob/main/src/assets/images/Clear.jpg?raw=true')

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions
      if (imageString.toLowerCase().includes('clear')) {
        setImage(clear)
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(cloud)
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(rain)
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(snow)
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(fog)
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(thunder)
      }
    }
  }, [weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout