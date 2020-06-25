import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Header from "./Header";
import NoMatchPage from "../pages/NoMatchPage";
import Footer from "./Footer";

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/blog" component={Blog}/>
                    <Route component={NoMatchPage}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}