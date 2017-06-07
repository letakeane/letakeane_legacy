import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { About } from './About';
import { Contact } from './Contact';
import './assets/stylesheets/Body.css';

export const Body = () => {
  return (
    <Router>
      <div className='body'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Resume' component={Resume} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  )
}
