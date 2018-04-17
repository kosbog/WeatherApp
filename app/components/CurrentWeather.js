import React, { Component } from 'react';

const RowTitle = () => {
    const titles = ['Time', 'Weather', 'Temperature', 'Feels like', 'Humidity', 'Cloudiness', 'Rain', 'Wind (km/dir)', 'Visibility (distance)'];
    const rows = titles.map((item) => {
        return (
            <span className="item name" key={item}>{item}</span>
        )
    });

    return (
        <div className="detail-name">
            {rows}
        </div>
    )
};

const RowData = ({ data }) => {
    const { hour } = data;
    return (
        <div className="detail-data">
            {
                hour.map((key, index) => {
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
                                <span className="item">{key.will_it_rain === 1 ? 'Yes' : 'No'}</span>
                                <span className="item">{roundNumber(key.wind_kph)}, {key.wind_dir}</span>
                                <span className="item">{roundNumber(key.vis_km)} km</span>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
};

const HourWeather = ({ item, roundNumber }) => {
    return (
        <div className="detail">
            <RowTitle />
            <RowData data={item} />
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
            {weather_data.forecast.days.map((item, index) => {
                const { date, day, month } = parseDate(item.date);
                console.log(item);

                if (item.id === id) {
                    return (
                        <React.Fragment key={index}>
                            <div className="forecast-location">
                                <span className="city">{capitalizeFirstLetter(temporaryCity)}</span>
                                <span className="date">
                                    {day}, {month} {date}
                                </span>
                            </div>
                            <div className="forecast-info">
                                <div className="info-wrapper">
                                    <div className="temp">
                                    <span className="degrees degree-icon">{roundNumber(item.maxtemp)}</span>
                                    <span className="degrees degree-icon">{roundNumber(item.mintemp)}</span>
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
                                {/* <HourWeather
                                        item={item}
                                        roundNumber={roundNumber} /> */}
                            </div>
                        </React.Fragment>
                    )
                }
            })
            }
        </div>
    );
}

export default CurrentWeather;