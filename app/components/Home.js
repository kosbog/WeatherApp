import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Form from './Form';
import MoreItem from './MoreItem';
import NoState from './NoState';
import { connect } from 'react-redux';
import store from '../components/store';
import { capitalizeFirstLetter, getDate, roundNumber } from '../utils/utils'
import { addNewUser, getWeather } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '00',
            day: '',
            city: '',
            count: 5,
            temporaryCity: 'Kiev',
            weekend: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        };

        this.handleCityName = this.handleCityName.bind(this);
        this.setCity = this.setCity.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.rollDays = this.rollDays.bind(this);
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
            city: "",
            id: "00"
        });
    }

    selectDay(id, day) {
        this.setState({
            id: id,
            day: day
        });
    }

    rollDays(bool) {

        bool === true ? this.setState({
            count: this.state.count - 5
        }) :
            this.setState({
                count: this.state.count + 5
            });
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
                        day={this.state.day}
                        id={this.state.id}
                        weather_data={state[0]}
                        temporaryCity={this.state.temporaryCity}
                        weekend={this.state.weekend}
                        month={this.state.month}
                        getDate={getDate}
                        roundNumber={roundNumber}
                        capitalizeFirstLetter={capitalizeFirstLetter} />
                    <Forecast
                        id={this.state.id}
                        count={this.state.count}
                        forecast={state[0]}
                        weekend={this.state.weekend}
                        month={this.state.month}
                        getDate={getDate}
                        roundNumber={roundNumber}
                        capitalizeFirstLetter={capitalizeFirstLetter}
                        selectDay={this.selectDay} />
                    <MoreItem
                        rollDays={this.rollDays}
                        count={this.state.count} />
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