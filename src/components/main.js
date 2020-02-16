import React from 'react';
import {Switch, Route} from 'react-router-dom'

import LandingPage from '../pages/landingpage';
import About from '../pages/aboutme'
import Contact from '../pages/contact';
import Resume from '../pages/resume';
import Projects from '../pages/projects';


const Main = () => {
    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/aboutme' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/resume' component={Resume} />
            <Route path='/projects' component={Projects} />
        </Switch>
    )
}

export default Main;