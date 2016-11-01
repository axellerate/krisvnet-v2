import React, { Component } from 'react';
import Header from './components/Header';
import Snowy from './components/Snowy';


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleSnowflake = this.toggleSnowflake.bind(this)

    this.state = {
      playSnowflakes: true
    };
  }

  toggleSnowflake (play) {
    this.setState({playSnowflakes: play});
  }

  render() {
    return (
      <div>
        <Header toggleSnowflake={this.toggleSnowflake} playSnowflakes={this.state.playSnowflakes}/>
        <Snowy playSnowflakes={this.state.playSnowflakes}/>
      </div>
    );
  }
}

export default App;
