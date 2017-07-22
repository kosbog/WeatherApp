import React, { Component } from 'react';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const forecastWeather = this.props.forecast,
            capitalizeFirstLetter = this.props.capitalizeFirstLetter,
            currentDate = {
                day: this.props.weekend[new Date().getDay()],
                date: new Date().getDate()
            };
        return (
            <div className="partial-forecast">
                {
                    forecastWeather.forecast.days.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <div className="item" key={index}>
                                    <div className="day">
                                        {currentDate.date + index} {currentDate.date + index}
                                    </div>
                                    <div className="icon">
                                        <img src={item.day.condition.icon} alt="" />
                                    </div>
                                    <div className="temp">
                                        <span>{item.day.maxtemp_c}-{item.day.mintemp_c}</span>
                                    </div>
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
                                            <li>Day temprature: {item.day.maxtemp_c}</li>
                                            <li>Night temprature: {item.day.mintemp_c}</li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );

    }
}

export default Forecast;