import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Form from './Form';
import NoState from './NoState';
import { connect } from 'react-redux';
import store from '../components/store';
import { addNewUser, getWeather } from '../components/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temporaryCity: 'Kiev',
            weekend: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };

        this.handleCityName = this.handleCityName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
        this.roundNumber = this.roundNumber.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        this.props.getWeather(this.state.temporaryCity);
    }

    handleCityName(e) {
        this.setState({
            city: e.target.value
        });
    }

    setCity(e) {
        e.preventDefault();
        this.props.getWeather(this.state.city);
        this.setState({
            temporaryCity: this.state.city,
            city: ""
        });
    }

    capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    getDate(week, month) {
        return {
            day: week[new Date().getDay()],
            date: new Date().getDate(),
            month: month[new Date().getMonth()]
        };
    }

    roundNumber(numb) {
        return Math.round(numb);
    }

    render() {
        const state = this.props.state;

        if (state.length === 0) {
            return (
                <NoState />
            )
        }
        return (
            <div className="container">
                <Form
                    city={this.state.city}
                    setCity={this.setCity}
                    handleCityName={this.handleCityName} />

                <div className="weather">
                    <CurrentWeather
                        weather_data={state[0]}
                        temporaryCity={this.state.temporaryCity}
                        weekend={this.state.weekend}
                        month={this.state.month}
                        getDate={this.getDate}
                        roundNumber={this.roundNumber}
                        capitalizeFirstLetter={this.capitalizeFirstLetter} />
                    <Forecast
                        forecast={state[1]}
                        weekend={this.state.weekend}
                        month={this.state.month}
                        getDate={this.getDate}
                        roundNumber={this.roundNumber}
                        capitalizeFirstLetter={this.capitalizeFirstLetter} />
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