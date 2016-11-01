import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');
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
  marginTop: "-36px",
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

var blogListItemLinkStyle = {
  display: "inline-block",
  padding: "10px",
  textDecoration: "none",
  color: "black",
  cursor: "pointer"
};

class Header extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleAnimation = this.toggleAnimation.bind(this)
  }

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

  toggleAnimation () {
    var play = true;
    if (this.props.playSnowflakes) {
      play = false;
    } else {
      play = true;
    }
    this.props.toggleSnowflake(play);
  }

  componentDidMount () {

    this.logoClickEvent();
    this.menuClickHoverEvents();
    this.blogsButtonHoverEvent();

    var toggleAnimation = document.getElementById("toggle-animation");
    toggleAnimation.addEventListener("click", this.toggleAnimation);
  }

  renderPlayButton () {
    return (<FontAwesome name='play' />);
  }

  renderPauseButton () {
    return (<FontAwesome name='pause' />);
  }

  render() {
    return (
      <div>
        <div style={ headerStyle }>
          <div style={ logoStyle } id="logo"></div>
          <ul style={ mainMenuItemsStyle } id="main-menu-items">
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#projects">Projects</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#past-work">Past Work</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#blogs" id="blogs-button">Blogs</a>
              <ul style={ blogsListStyle } id="blogs-list">
                <li><a style={ blogListItemLinkStyle } href="#blogs" id="blogs-button">ThoughtsAhead</a></li>
                <li><a style={ blogListItemLinkStyle } href="#blogs" id="blogs-button">WordsEachDay</a></li>
              </ul>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="https://www.wordseachday.com">LinkedIn</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="https://www.thoughtsahead.com">About</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#" id="toggle-animation">
                {this.props.playSnowflakes == true ? 
                                              this.renderPauseButton() : 
                                              this.renderPlayButton()}
              </a>
            </li>
          </ul>
          <div style={ currentSeasonStyle } id="current-seasion">Current Season: <span>Winter</span></div>
        </div>
      </div>
    );
  }
}

export default Header;
