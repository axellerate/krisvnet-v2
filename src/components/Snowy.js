import React, { Component } from 'react';

// src: http://www.beautiful-views.net/views/winter-way-forest-houses.jpg
import SnowCover from '../assets/winter-way-forest-houses.jpg';
import Clouds from '../assets/clouds.png';


var cloudStyle = {
  backgroundImage: "url(" + Clouds + ")",
  width: "100%",
  height: "80px",
  marginTop: "80px"
};

var snowyStyle = {
  backgroundImage: "url(" + SnowCover + ")",
  backgroundSize: "cover",
  marginTop: "-80px",
  width: "100%",
  height: "800px"
};

var canvasBottomStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#eee" // this is a placeholder - dont know what I want to do here
};

var snowflakes = {};
var snowflakesIndex = 0;
var snowflakesNumber = 40;

function Snowflake (ctx, x, y) {
    this.x = x;
    this.y = y;
    var radiusMax = 6;
    var radiusMin = 1;
    this.radius = Math.random()*(radiusMax-radiusMin+1)+radiusMin;
    this.life = 0;
    this.maxLife = 1000;
    snowflakesIndex++;
    snowflakes[snowflakesIndex] = this;
    this.id = snowflakesIndex;
}

Snowflake.prototype.draw = function (ctx) {
    var velX = 1;
    var velY = 1; 
    if (this.radius < 2) {
      velY = .2;
    } else if (this.radius <= 3) {
      velY = .5;
    } else if (this.radius <= 5 && this.radius > 3) {
      velY = .8;
    } else {
      velY = 2;
    }
    this.x += Math.random()+.5;
    this.y += velY;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fill();
    this.life++;
    if (this.life >= this.maxLife) {
      delete snowflakes[this.id];
    }
}

class Snowy extends Component {

  componentDidMount () {
    var canvas = document.getElementById("snow-effects"),
        ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = 800;
    canvas.style.marginTop = "-50px";

    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.snowGenerator(canvas, ctx);

  }

  snowGenerator (canvas, ctx) {
    setInterval(function () {
      for (var i = 0; i < snowflakesNumber; i++) {
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random()*(20-0+1)+0;
        new Snowflake(ctx, randomX-200, randomY);
      }
    }, 1000);

    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i in snowflakes) {
        snowflakes[i].draw(ctx);
      }
    }, 24);
  }

  render() {
    return (
      <div>
        <div style={ snowyStyle }>
          <div style={ cloudStyle }></div>
          <canvas id="snow-effects">

            </canvas>
        </div>
        <div style={ canvasBottomStyle }></div>
      </div>
    );
  }
}

export default Snowy;
