import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { reloadPage } from '../utils/utils';

class NoMatch extends Component {
    render() {
        return (
            <div className="nomatch">
                <p>Oops!..</p>
                <p>Probably, the weather here is terrible and there is no signal :(</p>
                <p>
                    <Link to="/">Try to find out the weather here! ;)</Link>
                </p>
            </div>
        );
    }
}

export default NoMatch;