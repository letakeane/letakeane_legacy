import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Aside } from './Aside';
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { Resume } from './Resume';
import { About } from './About';
import { Contact } from './Contact';
import { success } from './success';
import createBrowserHistory from 'history/createBrowserHistory';
import './assets/stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div className='App'>
          <Aside />
          <article className='body'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Portfolio' component={Portfolio} />
              <Route path='/Resume' component={Resume} />
              <Route path='/About' component={About} />
              <Route exact path='/Contact' component={Contact} />
              <Route path='/Contact/success' component={success} />
            </Switch>
          </article>
        </div>
      </Router>
    );
  }
}

export default App;
