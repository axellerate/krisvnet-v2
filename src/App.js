import React, { Component } from 'react';
import Header from './components/Header';
import Snowy from './components/Snowy';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Snowy />
      </div>
    );
  }
}

export default App;
