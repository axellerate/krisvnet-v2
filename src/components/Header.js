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

var currentSeasonStyle = {
  float: "right",
  marginTop: "-35px",
  marginRight: "25px",
  padding: "5px",
  border: "3px solid lightblue",
  borderRadius: "5px"
};

var mainMenuItemsStyle = {
  float: "left",
  marginLeft: "180px",
  marginTop: "-40px",
  listStyleType: "none",
  display: "inline",
  overflow: "hidden"
};

var listItemStyle = {
  float: "left"
};

var listItemLinkStyle = {
  display: "block",
  padding: "14px 20px",
  textDecoration: "none",
  color: "black",
  cursor: "pointer"
};

var blogsListStyle = {
  listStyleType: "none",
  display: "none",
  backgroundColor: "#fff"
};

class Header extends Component {

  logoClickEvent () {
    function navigateHome () {
      window.location.href = "/";
    }
    document.getElementById("logo").addEventListener("click", navigateHome);
  }

  menuClickHoverEvents () {
    var liElements = document.getElementsByTagName("a");

    var liElementsArray = Array.prototype.slice.call( liElements );

    liElementsArray.forEach(function(element) {
      element.onmouseover=function(){
        this.style.textDecoration = "underline";
      };
      element.onmouseout=function(){
        this.style.textDecoration = "none";
      };
    }, this);
  }

  blogsButtonHoverEvent () {
    var blogButtom = document.getElementById("blogs-button");
    var blogsList = document.getElementById("blogs-list");
    blogButtom.onmouseover=function(){
      blogsList.style.display = "inline-block";
    };
    blogsList.onmouseout=function(){
      blogsList.style.display = "none";
    };
  }

  componentDidMount () {

    this.logoClickEvent();
    this.menuClickHoverEvents();
    this.blogsButtonHoverEvent();
    
  }

  render() {
    return (
      <div>
        <div style={ headerStyle }>
          <div style={ logoStyle } id="logo"></div>
          <ul style={ mainMenuItemsStyle } id="main-menu-items">
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#">Projects</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#">Past Work</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#" id="blogs-button">Blogs</a>
              <ul style={ blogsListStyle } id="blogs-list">
                <li>ThoughtsAhead</li>
                <li>WordsEachDay</li>
              </ul>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="https://www.wordseachday.com">LinkedIn</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="https://www.thoughtsahead.com">About</a>
            </li>
          </ul>
          <div style={ currentSeasonStyle } id="current-seasion">Current Seasion: <span>Winter</span></div>
        </div>
      </div>
    );
  }
}

export default Header;
