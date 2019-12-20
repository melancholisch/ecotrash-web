import React from 'react';
import  {BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Steps from './pages/Steps';
import Points from './pages/Points';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/steps" component={Steps} />
                <Route path="/points" component={Points} />
                
            </Switch>        
        </BrowserRouter>
    );
}