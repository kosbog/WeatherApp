import React, { Component } from 'react';

const Forecast = ({
    id,
    count,
    forecast,
    dateData,
    parseDate,
    roundNumber,
    capitalizeFirstLetter,
    selectDay
}) => {
    return (
        <div className="partial-forecast">
            {forecast.forecast.days.map((item, index) => {
                    const { date, day, month } = parseDate(item.date);

                    if (index < count) {
                        return (
                            <div
                                className={id === item.id ? "item check" : "item"}
                                key={index}
                                onClick={() => selectDay(item.id)}>
                                <div className="day">
                                    <span className="day-name">
                                        {day}
                                    </span>
                                    <span className="day-date">
                                        {month} {date}
                                    </span>
                                </div>
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="temp">
                                    <span className="degree-icon">{roundNumber(item.maxtemp)}</span> / <span className="degree-icon">{roundNumber(item.mintemp)}</span>
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