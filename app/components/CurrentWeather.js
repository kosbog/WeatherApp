import React, { Component } from 'react';

const HourWeather = ({ item, roundNumber }) => {
    return (
        <div className="detail">
            <div className="detail-name">
                <span className="item name">Time</span>
                <span className="item name">Weather</span>
                <span className="item name">Temperature</span>
                <span className="item name">Feels like</span>
                <span className="item name">Humidity</span>
                <span className="item name">Cloudiness</span>
                <span className="item name">Rain</span>
                <span className="item name">Wind (km/dir)</span>
                <span className="item name">Visibility (distance)</span>
            </div>
            <div className="detail-data">
                {
                    item.hour.map((key, index) => {
                        if (index % 3 === 0) {
                            return (
                                <div className="detail-options" key={index}>
                                    <span className="item time">{key.time.substr(11, 5)}</span>
                                    <span className="item detail-img">
                                        <img src={key.condition.icon} alt={key.condition.text} />
                                    </span>
                                    <span className="item degree-icon">{roundNumber(key.temp_c)}</span>
                                    <span className="item degree-icon">{roundNumber(key.feelslike_c)}</span>
                                    <span className="item">{roundNumber(key.humidity)} %</span>
                                    <span className="item">{roundNumber(key.cloud)} %</span>
                                    <span className="item">{key.will_it_rain}</span>
                                    <span className="item">{roundNumber(key.wind_kph)}, {key.wind_dir}</span>
                                    <span className="item">{roundNumber(key.vis_km)} km</span>
                                </div>
                            )
                        }
                    })
                }
            </div>
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
                                        </div>
                                        <div className="title">
                                            <img src={item.icon} alt={item.name} />
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="other">
                                            <ul>
                                                <li>Sunrise: {item.sunrise}</li>
                                                <li>Sunset: {item.sunset}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <HourWeather
                                        item={item}
                                        roundNumber={roundNumber} />
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