import React, { Component } from 'react';

const HourWeather = () => {
    return (
        <div>

        </div>
    )
}

const CurrentWeather = ({
    id,
    weather_data,
    temporaryCity,
    dateData,
    parseDate,
    roundNumber,
    capitalizeFirstLetter
}) => {
    return (
        <div className="full-forecast">
            {
                weather_data.forecast.days.map((item, index) => {
                    const dateObj = parseDate(item.date);

                    if (item.id === id) {
                        return (
                            <div key={index}>
                                <div className="forecast-location">
                                    <span className="city">{capitalizeFirstLetter(temporaryCity)}</span>
                                    <span className="date">
                                        {dateData.weekend.map((item, index) => {
                                            if (item.slice(0, 3) === dateObj.name.slice(0, 3)) {
                                                return (
                                                    `${item}, `
                                                )
                                            }
                                        })}
                                        {dateData.month.map((item, index) => {
                                            if (item.slice(0, 3) === dateObj.month.slice(0, 3)) {
                                                return (
                                                    `${item} `
                                                )
                                            }
                                        })}
                                        {dateObj.date}</span>
                                </div>
                                <div className="forecast-info">
                                    <div className="info-wrapper">
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

                                    <div className="detail">
                                        <div className="detail-name"></div>
                                        {
                                            item.hour.map((key, index) => {
                                                if (index % 6 === 0) {
                                                    return (
                                                        <div className="detail-data">
                                                            <div className="detail-hours"></div>
                                                            <div className="detail-options"></div>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
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