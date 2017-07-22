import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
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
        this.roundNumber = this.roundNumber.bind(this);
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

    roundNumber(numb) {
        return (`${Math.round(numb)} + &`)
    }

    setCity() {
        this.props.getWeather(this.state.city);
        this.setState({
            temporaryCity: this.state.city,
            city: ""
        });
    }

    render() {
        const state = this.props.state;

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
                    <CurrentWeather
                        weather_data={state[0]}
                        temporaryCity={this.state.temporaryCity}
                        weekend={this.state.weekend}
                        capitalizeFirstLetter={this.capitalizeFirstLetter} />
                    <Forecast 
                    forecast={state[1]}
                    weekend={this.state.weekend}
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