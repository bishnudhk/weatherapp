import React, { useContext, useReducer, useEffect } from "react";

const initialState = {
  q: "London",
  lon: -0.1257,
  lat: 51.5085,
  list: [],
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api =
    "http://api.openweathermap.org/data/2.5/forecast/daily?appid=848b664e5348827dd1ff074da41a267f&units=imperial&cnt=10&";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_WEATHER",
        payload: {
          list: data.list,
          lon: data.lon,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(`${api}q=${state.q}&lon=${state.lon}&lat=${state.lat}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        list: action.payload.list,
        lon: action.payload.lon,
      };
  }
  return state;
};
export { AppContext, AppProvider, useGlobalContext };
