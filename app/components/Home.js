import React, { Component } from 'react';
import Weather from './Weather';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../components/store';
import { addNewUser, getWeather } from '../components/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temporaryCity: 'Kiev',
            weekend: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ]
        };

        this.handleCityName = this.handleCityName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

    componentDidMount() {
        this.props.getWeather('Kiev');
    }

    handleCityName(e) {
        this.setState({
            city: e.target.value
        });
    }

    capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    setCity() {
        this.props.getWeather(this.state.city);
        this.setState({
            temporaryCity: this.state.city,
            city: ""
        });
    }

    render() {
        const state = this.props.state,
            currentWeather = this.props.state[0],
            forecastWeather = this.props.state[1],
            currentDate = {
                day: this.state.weekend[new Date().getDay()],
                date: new Date().getDate()
            }

        if (state.length === 0) {
            return (
                <div> no data </div>
            )
        }
        return (
            <div>
                <input type="text" value={this.state.city} onChange={this.handleCityName} />
                <button onClick={this.setCity}>SET</button>

                <div className="weather">
                    <div className="full-forecast">
                        <div className="forecast-location">
                            <span className="city">{this.state.temporaryCity}</span>
                            {this.state.temporaryCity &&
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
                                                <li key={index}>{this.capitalizeFirstLetter(key)}: {currentWeather.current.secondary[key]}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="partial-forecast">
                        {
                            forecastWeather.forecast.days.map((item, index) => {
                                return (
                                    <div className="item">
                                        <div className="day">
                                            {item.date}
                                        </div>
                                        <div className="icon">
                                            <img src={item.day.condition.icon} alt="" />
                                        </div>
                                        <div className="temp">
                                            <span>{item.day.maxtemp_c}-{item.day.mintemp_c}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: (elem) => {
            dispatch(getWeather(elem))
        },
        setTown: (town) => {
            dispatch(setTown(town))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);