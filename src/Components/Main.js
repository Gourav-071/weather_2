import React, { useState, useEffect } from "react";
import "./Main.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import IconButton from "@mui/material/IconButton";

const Main = () => {
  const [city, uCity] = useState("");
  const [state, uState] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=fc101054bd8b352a463640b5a3d18572&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();

      uCity(resJson.main);
    };
    fetchApi();
  }, [state]);

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            className="inpu"
            type="search"
            placeholder=" Search City"
            onChange={(event) => {
              uState(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="info">No Data! Please Enter City</p>
        ) : (
          <>
            <div className="info">
              <h2>City : {state}</h2>{" "}
            </div>
            <div className="icon">
              <IconButton
                sx={{
                  color: "orange",
                  "&:hover": { color: "skyblue" },
                  // color: "orange",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              >
                <WbSunnyIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
            <div className="info1">
              <h5>⛅ Temperature : {city.temp}: °C</h5>
            </div>
            <div className="info2">
              <h5>⛅ Minimum Temperature : {city.temp_min}: °C</h5>
            </div>
            <div className="info2">
              <h5>⛅ Maximum Temperature : {city.temp_max}: °C</h5>
            </div>
            <div className="info2">
              <h5>🌦️ Humidity : {city.humidity}</h5>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
