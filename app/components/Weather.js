import React, { Component } from 'react';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('next', nextProps);
        this.setState({
            data: nextProps
        });
    }
    render() {
        console.log('weather ---', this.state.data);
        return (
            <div>
                Weather: {this.state.data.location.country}
            </div>
        );
    }
}

export default Weather;