import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Navbar from './NavBar';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';


class MainApp extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<MainApp />, document.getElementById('main'));

