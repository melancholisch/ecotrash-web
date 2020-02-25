import React from 'react';
import  {BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Steps from './pages/Steps';
import Points from './pages/Points';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/team" component={Team} />
                <Route path="/steps" component={Steps} />
                <Route path="/points" component={Points} />
                
            </Switch>        
        </BrowserRouter>
    );
}