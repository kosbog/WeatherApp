import React, { Component } from 'react';

const Forecast = ({
    id,
    count,
    forecast,
    weekend,
    month,
    getDate,
    roundNumber,
    capitalizeFirstLetter,
    selectDay
}) => {

    return (
        <div className="partial-forecast">
            {
                forecast.forecast.days.map((item, index) => {
                    const date = `${getDate(weekend, month).month}, ${getDate(weekend, month).date + index}`;
                    if (index < count) {
                        return (
                            <div
                                className={id === item.id ? "item check" : "item"}
                                key={index}
                                onClick={() => selectDay(item.id, date)}>
                                <div className="day">
                                    {date}
                                </div>
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="temp">
                                    <span className="degree-icon">{roundNumber(item.maxtemp)}</span> - <span className="degree-icon">{roundNumber(item.mintemp)}</span>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default Forecast;