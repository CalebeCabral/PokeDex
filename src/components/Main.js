import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

function Main() {
  return (
    <div className="flex flex-auto h-full">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id" component={Pokemon} />
      </Switch>
    </div>
  );
}

export default Main;
