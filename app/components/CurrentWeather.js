import React, { Component } from 'react';

const CurrentWeather = (props) => {
    const currentWeather = props.weather_data,
            currentDate = {
                day: props.weekend[new Date().getDay()],
                date: new Date().getDate()
            }
    return (
        <div className="full-forecast">
            <div className="forecast-location">
                <span className="city">{props.temporaryCity}</span>
                {props.temporaryCity &&
                    <span className="date">{currentDate.day} {currentDate.date}</span>}
            </div>
            <div className="forecast-info">
                <div className="temp">
                    <span className="degrees">{currentWeather.current.temp}</span>
                    <img src={currentWeather.current._icon} alt={currentWeather.current._name} />
                </div>
                <div className="other">
                    <ul>
                        {
                            Object.keys(currentWeather.current.secondary).map((key, index) => {
                                return (
                                    <li key={index}>{props.capitalizeFirstLetter(key)}: {currentWeather.current.secondary[key]}</li>
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