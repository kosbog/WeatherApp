import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.getApi = this.getApi.bind(this);
    }

    getApi() {
        return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=d68695105aded35200638d7b3c1fb997')
        .then((res)=> {
            console.log(res);
        });
    }

    componentWillMount() {
        this.getApi();
    }
    
    render() {
        return (
            <div onClick={this.getApi}>
                home
            </div>
        );
    }
}

export default Home;