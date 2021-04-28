import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Category from '../components/Category/Category';
import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop';


class Approuter extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/category' component={Category} />
                <Route exact path='/shop' component={Shop} />
            </Router>
        )
    }
}
export default Approuter;