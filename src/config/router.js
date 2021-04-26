import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home/Home'


class Approuter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
            </Router>
        )
    }
}
export default Approuter;