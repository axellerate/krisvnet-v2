import React, { Component } from 'react';
import Logo from '../assets/krisv-logo.png';


var headerStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e7e7e7"
};

var logoStyle = {
  height: "40px",
  width: "150px",
  backgroundImage: "url(" + Logo + ")",
  backgroundSize: "cover",
  marginTop: "5px",
  marginLeft: "10px",
  cursor: "pointer"
};

class Header extends Component {

  componentDidMount () {
    function navigateHome () {
      window.location.href = "/";
    }

    document.getElementById("logo").addEventListener("click", navigateHome);
    
  }

  render() {
    return (
      <div>
        <div style={ headerStyle }>
          <div style={ logoStyle } id="logo"></div>
        </div>
      </div>
    );
  }
}

export default Header;
