import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Detail from './components/Detail';
import Calendar from './components/Calendar';


export default (
  <Route exact path='/' component={App}>
    <Route path='/cal' component={Calendar}></Route>
    <Route path='/detail' component={Detail}></Route>
  </Route>
)
