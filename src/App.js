import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Aside } from './Aside';
import { Home } from './Home';
import { Work } from './Work';
import { Resume } from './Resume';
import { About } from './About';
import { Contact } from './Contact';
import { Talks } from './Talks';
import { success } from './success';
import { Footer } from './Footer';
import createBrowserHistory from 'history/createBrowserHistory';
import './assets/stylesheets/App.css';

class App extends Component {

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} >
        <div className='App'>
          <Aside />
            <div className='body-footer'>
              <article className='body'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/Portfolio' component={Work} />
                  <Route path='/Resume' component={Resume} />
                  <Route path='/About' component={About} />
                  <Route exact path='/Contact' component={Contact} />
                  <Route exact path='/Talks' component={Talks} />
                  <Route path='/Contact/success' component={success} />
                </Switch>
              </article>
              <Footer />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
