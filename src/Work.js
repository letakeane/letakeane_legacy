import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { project } from './assets/Portfolio/project';

export const Work = () => {
  return (
    <Switch>
      <Route exact path='/Portfolio' component={Portfolio}/>
      <Route path='/Portfolio/:project' component={project}/>
    </Switch>
  )
}
