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
            {
                forecast.forecast.days.map((item, index) => {
                    const dateObj = parseDate(item.date);

                    if (index < count) {
                        return (
                            <div
                                className={id === item.id ? "item check" : "item"}
                                key={index}
                                onClick={() => selectDay(item.id)}>
                                <div className="day">
                                    <span className="day-name">
                                        {dateData.weekend.map((item, index) => {
                                            if (item.slice(0, 3) === dateObj.name.slice(0, 3)) {
                                                return (
                                                    item
                                                )
                                            }
                                        })}
                                    </span>
                                    <span className="day-date">
                                        {dateData.month.map((item, index) => {
                                            if (item.slice(0, 3) === dateObj.month.slice(0, 3)) {
                                                return (
                                                    `${item} `
                                                )
                                            }
                                        })}
                                        {dateObj.date}
                                    </span>
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