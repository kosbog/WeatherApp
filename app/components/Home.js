import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../components/store';
import  {addNewUser, getWeather}  from '../components/actions';

class Home extends Component {
    componentWillMount() {
        this.props.getWeather();
        
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(store.getState());
    }
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };

        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.getApi = this.getApi.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    getApi(){
        this.props.getWeather();
        console.log(store.getState());
    }

    setName() {
        this.props.add(this.state.name, this.state.age);
        this.setState({
            name: '',
            age: ''
        });
        console.log(store.getState());
    }
    render() {
        let users = this.props.user;
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.handleName} />
                <input type="text" value={this.state.age} onChange={this.handleAge} />
                <button onClick={this.setName.bind(this)}>
                    set
                </button>
                <ul>
                    {users.map((user, index) => {
                            return ( <li key={index}>{user.name} - {user.age}</li>
                            );
                        })}
                </ul>
                <button onClick={this.getApi}>get weather</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (username, userage) => {
            dispatch(addNewUser(username, userage))
        },
        getWeather: ()=>{
            dispatch(getWeather())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);