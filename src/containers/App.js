import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';
import Clock from './Clock';

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path='/TimeComparisonOfCities' component={Clock}/>
      </Switch>
    </>
  );
}

export default App;
