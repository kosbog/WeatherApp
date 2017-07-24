import React, { Component } from 'react';

const CurrentWeather = ({
    day,
    id,
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
            {
                weather_data.forecast.days.map((item, index) => {
                    if (item.id === id) {
                        return (
                            <div key={index}>
                                <div className="forecast-location">
                                    <span className="city">{capitalizeFirstLetter(temporaryCity)}</span>
                                    <span className="date">{day || (`${getDate(weekend, month).month}, ${getDate(weekend, month).date}`)}</span>
                                </div>
                                <div className="forecast-info">
                                    <div className="temp">
                                        <span className="degrees degree-icon">{roundNumber(item.maxtemp)} - {roundNumber(item.mintemp)}</span>
                                        <img src={item.icon} alt={item.name} />
                                    </div>
                                    <div className="other">
                                        <span>{item.name}</span>
                                        <ul>
                                            <li>Wind: {item.wind} km/h</li>
                                            <li>Sunrise: {item.sunrise}</li>
                                            <li>Sunset: {item.sunset}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default CurrentWeather;