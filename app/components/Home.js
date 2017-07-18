import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { functest } from '../components/actions';
import store from '../components/store';

class Home extends Component {

    render() {
        console.log(store.getState());
        return (
            <div>
                <p onClick={this.props.setData()}>
                    set
                </p>
                <p >
                    {store.getState().age}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.resss
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setData: () => {
            dispatch(functest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);