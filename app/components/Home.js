import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Form from './Form';
import MoreItem from './MoreItem';
import NoState from './NoState';
import NoMatchRoute from './NoMatchRoute';
import { connect } from 'react-redux';
import store from '../components/store';
import { capitalizeFirstLetter, roundNumber, parseDate } from '../utils/utils'
import { addNewUser, getWeather } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '00',
            city: '',
            count: 5,
            temporaryCity: 'Kiev',
            dateData: {
                weekend: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            }
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

    selectDay(id) {
        this.setState({
            id: id
        });
    }

    rollDays(bool) {
        bool === true ?
            this.setState({ count: this.state.count - 5 }) :
            this.setState({ count: this.state.count + 5 });
    }

    render() {
        const state = this.props.state,
            error = this.props.load;

        if (state.length === 0) {
            return (
                <NoState />
            )
        }

         if (error === true) {
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
                        id={this.state.id}
                        weather_data={state[0]}
                        temporaryCity={this.state.temporaryCity}
                        dateData={this.state.dateData}
                        parseDate={parseDate}
                        roundNumber={roundNumber}
                        capitalizeFirstLetter={capitalizeFirstLetter} />
                    <Forecast
                        id={this.state.id}
                        count={this.state.count}
                        forecast={state[0]}
                        dateData={this.state.dateData}
                        parseDate={parseDate}
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
        state: state,
        load: state.error
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