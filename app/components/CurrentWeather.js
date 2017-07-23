import React, { Component } from 'react';

const CurrentWeather = ({ 
    weather_data,
    temporaryCity,
    weekend,
    month,
    getDate,
    roundNumber,
    capitalizeFirstLetter
}) => {

    return (
        <div className="full-forecast">
            <div className="forecast-location">
                <span className="city">{capitalizeFirstLetter(temporaryCity)}</span>
                {temporaryCity &&
                    <span className="date">{getDate(weekend, month).day}, {getDate(weekend, month).date}</span>}
            </div>
            <div className="forecast-info">
                <div className="temp">
                    <span className="degrees degree-icon">{weather_data.current.temp}</span>
                    <img src={weather_data.current._icon} alt={weather_data.current._name} />
                </div>
                <div className="other">
                    <ul>
                        {
                            Object.keys(weather_data.current.secondary).map((key, index) => {
                                return (
                                    <li key={index}>{capitalizeFirstLetter(key)}: {weather_data.current.secondary[key]}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default CurrentWeather;