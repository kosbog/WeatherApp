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
            city: ''
        };

        this.handleCityName = this.handleCityName.bind(this);
        this.setCity = this.setCity.bind(this);
    }

    componentDidMount() {
        this.props.getWeather('Kiev');
    }

    handleCityName(e) {
        this.setState({
            city: e.target.value
        });
    }

    setCity() {
        this.props.getWeather(this.state.city);
    }

    render() {
        let state = this.props.state;
        if (state.length === 0) {
            console.log('nonnnn', state);
            return (
                <div> no data </div>
            )
        }
        return (
            <div>
                <input type="text" value={this.state.city} onChange={this.handleCityName} /> 
                <button onClick={this.setCity}>SET</button>
                <ul> recieve {state.map((item, index) => {
                    return (
                        <li key={index}>{item.weather.location.country}</li>
                    )
                })}</ul>
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
        add: (username, userage) => {
            dispatch(addNewUser(username, userage))
        },
        getWeather: (elem) => {
            dispatch(getWeather(elem))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);