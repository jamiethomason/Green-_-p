import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Blog from '../../components/Blog';


class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <a href=""><img src="" alt="GreenUp" class="icon" id="astro"/></a>
                <Navigation/>
            </div>
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/Blog"/>)}/>
          <Route path="/Blog" component={Blog}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;