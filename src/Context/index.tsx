  import { useContext, createContext, useState, useEffect } from "react";
  import axios from "axios";

  const StateContext = createContext();

  export const StateContextProvider = ({children}) => {
    const [weather, SetWeather] = useState({});
    const [values, SetValues] = useState([]);
    const [place, SetPlace] = useState("London");
    const [thislocation, SetLocation] = useState("");
    console.log(import.meta.env.VITE_APP_KEY)

    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: "https://visual-crossing-weather.p.rapidapi.com/current",
        params: {
          aggregateHours: "24", 
          q: place,
          contentType: "json",
          unitGroup: "metric",
          shortColumnNames: 0,
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_APP_KEY,
          "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        const thisData = Object.values(response.data.locations)[0];
        SetLocation(thisData.address);
        SetValues(thisData.values);
        SetWeather(thisData.values[0]);
      } catch (err) {
        console.log(err);
        alert("This place does not exist");
      }
    };

    useEffect(() => {
      fetchWeather()
    }, [place]);

    useEffect(() => {
      console.log(values, 'values');
    }, [values]);

    return (
      <StateContext.Provider value={{ weather, SetPlace, values, thislocation }}>
        {children}
      </StateContext.Provider>
    );
  };

  export const useStateContext = () => useContext(StateContext);
