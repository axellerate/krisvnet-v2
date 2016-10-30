import React, { Component } from 'react';

var headerStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e7e7e7"
};

class Header extends Component {
  render() {
    return (
      <div>
        <div style={ headerStyle }></div>
      </div>
    );
  }
}

export default Header;
