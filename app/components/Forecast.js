import React, { Component } from 'react';

const SecondaryForecast = ({
    item,
    capitalizeFirstLetter,
    roundNumber
}) => {
    return (
        <div className="secondary">
            <ul>
                {
                    Object.keys(item.astro).map((key, index) => {
                        if (index < 2) {
                            return (
                                <li key={index}>{capitalizeFirstLetter(key)}: {item.astro[key]}</li>
                            )
                        }
                    })
                }
                <li>Day temprature: <span className="degree-icon"> {roundNumber(item.day.maxtemp_c)}</span></li>
                <li>Night temprature: <span className="degree-icon"> {roundNumber(item.day.mintemp_c)}</span></li>
            </ul>
        </div>
    )
}

const Forecast = ({
    forecast,
    weekend,
    month,
    getDate,
    roundNumber,
    capitalizeFirstLetter
}) => {
    return (
        <div className="partial-forecast">
            {
                forecast.forecast.days.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <div className="item" key={index}>
                                <div className="day">
                                    {getDate(weekend, month).month}, {getDate(weekend, month).date + index}
                                </div>
                                <div className="icon">
                                    <img src={item.day.condition.icon} alt="" />
                                </div>
                                <div className="temp">
                                    <span className="degree-icon">{roundNumber(item.day.maxtemp_c)}</span> - <span className="degree-icon">{roundNumber(item.day.mintemp_c)}</span>
                                </div>
                                <SecondaryForecast
                                    item={item}
                                    capitalizeFirstLetter={capitalizeFirstLetter}
                                    roundNumber={roundNumber} />
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default Forecast;