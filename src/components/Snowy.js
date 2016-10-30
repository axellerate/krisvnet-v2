import React, { Component } from 'react';

// src: http://www.beautiful-views.net/views/winter-way-forest-houses.jpg
import SnowCover from '../assets/winter-way-forest-houses.jpg';
import Clouds from '../assets/clouds.png';


var cloudStyle = {
  backgroundImage: "url(" + Clouds + ")",
  width: "100%",
  height: "80px"
};

var snowyStyle = {
  backgroundImage: "url(" + SnowCover + ")",
  backgroundSize: "cover",
  marginTop: "-80px",
  width: "100%",
  height: "800px"
};

class Snowy extends Component {

  componentDidMount () {
    var canvas = document.getElementById("snow-effects"),
        ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = 800;

    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    

  }

  render() {
    return (
      <div>
        <div style={ snowyStyle }>
          <div style={ cloudStyle }>
            <canvas id="snow-effects">

            </canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default Snowy;
