import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from '../components/Category/Category';
import Home from '../components/Home/Home'


class Approuter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/category' component={Category} />
            </Router>
        )
    }
}
export default Approuter;