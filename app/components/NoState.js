import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../components/store';

const RequestLoading = () => {
    return (
        <div>
            <p>Please, wait few seconds.</p>
            <p>We are already updating the weather for you! :) </p>
        </div>
    )
}

const RequestError = ({reloadPage}) => {
    return (
        <div>
            <p>
                Sorry, but we do not know this city. Perhaps you were mistaken.

            </p>
            <p>
                <a href='' onClick={reloadPage}>Click here to try one more time!</a>
            </p>
        </div>
    )
}

class NoState extends Component {
    constructor(props) {
        super(props);

        this.reloadPage = this.reloadPage.bind(this);
    }

    reloadPage() {
        window.location.reload();
    }

    render() {
        return (
            <div className="nostate">
                {this.props.error ? <RequestError reloadPage={this.reloadPage}/> : <RequestLoading />}
            </div>
        );
    }
}

export default NoState;