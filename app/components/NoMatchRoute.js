import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class NoMatch extends Component {
    render() {
        return (
            <div className="nomatch">
                <p>Oops!..</p>
                <p>Probably, the weather here is terrible and there is no signal :(</p>
                <p>
                    <NavLink to="/">Try to find out the weather here! ;)</NavLink>
                </p>
            </div>
        );
    }
}

export default NoMatch;