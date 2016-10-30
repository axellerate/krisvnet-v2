import React, { Component } from 'react';
import Clouds from '../assets/clouds.png';

var headerStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#444444"
};

var cloudStyle = {
  backgroundImage: "url(" + Clouds + ")",
  width: "100%",
  height: "80px"
};

class Header extends Component {
  render() {
    return (
      <div>
        <div style={ headerStyle }></div>
        <div style={ cloudStyle }></div>
      </div>
    );
  }
}

export default Header;
