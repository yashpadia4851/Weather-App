import { useEffect, useState } from "react"

export const useDate =()=>{
    const locale = 'en'
    const [today , settoday] = useState(new Date);

    useEffect(() =>{
        const timer = setInterval(() => {
            settoday(new Date())
        }, 60000);

        return () =>{
            clearInterval(timer)
        }
    },[])

    const day = today.toLocaleDateString(locale , {weekday : 'long'})
    console.log(day , 'day')

    const date = `${day} , ${today.getDate()} ,${today.toLocaleDateString(locale , {month: 'long'})}\n\n`
    const time =  today.toLocaleDateString(locale , {hour: 'numeric' , hour12 : true , minute : 'numeric'})
    console.log(date , time , 'date and the time')
    return {
        date,time
    }
}   