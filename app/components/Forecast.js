import React, { Component } from 'react';

class Forecast extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const forecastWeather = this.props.forecast,
            capitalizeFirstLetter = this.props.capitalizeFirstLetter,
            roundNumber = this.props.roundNumber,
            currentDate = {
                day: this.props.weekend[new Date().getDay()],
                date: new Date().getDate(),
                month: this.props.month[new Date().getMonth()]
            };
        return (
            <div className="partial-forecast">
                {
                    forecastWeather.forecast.days.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <div className="item" key={index}>
                                    <div className="day">
                                        {currentDate.month}, {currentDate.date + index}
                                    </div>
                                    <div className="icon">
                                        <img src={item.day.condition.icon} alt="" />
                                    </div>
                                    <div className="temp">
                                        <span className="degree-icon">{roundNumber(item.day.maxtemp_c)}</span> - <span className="degree-icon">{roundNumber(item.day.mintemp_c)}</span>
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
                                            <li>Day temprature: <span className="degree-icon"> {roundNumber(item.day.maxtemp_c)}</span></li>
                                            <li>Night temprature: <span className="degree-icon"> {roundNumber(item.day.mintemp_c)}</span></li>
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