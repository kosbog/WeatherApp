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
            name: '',
            age: ''
        };
    }

    componentDidMount() {
        this.props.getWeather();
    }

    setName() {
        this.props.add(this.state.name, this.state.age);
        this.setState({
            name: '',
            age: ''
        });
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
            <ul> recieve {state.map((item, index) => {
                return (
                    <li key={index}>{item.weather.data.location.country}</li>
                )
            })}</ul>
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
        getWeather: () => {
            dispatch(getWeather())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);