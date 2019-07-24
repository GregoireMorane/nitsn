import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Modal from './containers/Modal';
import View3D from './containers/View3D';
import Home from './containers/Home';
import { Wrapper } from './components/Wrapper';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/modal" component={Modal} />
          <Route path="/3dView" component={View3D} />
        </Switch>
      </Wrapper>
    );
  }
}
export default App;
