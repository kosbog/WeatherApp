import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../components/store';

class Home extends Component {
    render() {
        let users = this.props.user;
        console.log(store);
        return (
            <div>
                <button onClick={this.props.addUser({ name: 'Bady', age: 22 })}>
                    set
                </button>
                <ul>
                    {users.map((item, index) => {
                        return (
                            <li key={index}>{item.name} - {item.age}</li>
                        )
                    })}
                </ul>
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
        addUser: (user) => {
            dispatch({
                type: "ADD_USER",
                payload: user
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);