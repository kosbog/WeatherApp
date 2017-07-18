import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route component={NoMatchRoute}></Route>
                    {/*
                        <Route exact path='/battle' component={Battle}></Route>
                        <Route component={NoMatchRoute}></Route>
                    */}
                </Switch>
            </Router>
        );
    }
}

export default App;