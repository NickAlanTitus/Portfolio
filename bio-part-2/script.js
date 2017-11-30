$(function() {



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
     ctx.shadowColor = "black";
     ctx.shadowOffsetX = 5;
     ctx.shadowOffsetY = 5;
     ctx.shadowBlur = 5;
     ctx.font = "100px times new roman";

var gradient = ctx.createLinearGradient(0, 0, 800, 100);
     gradient.addColorStop(0, "blue");
     gradient.addColorStop(1, "red");
     ctx.fillStyle = gradient;
     ctx.fillText("Nick Titus", 275, 100);

var c = document.getElementById("myCanvas");
     ctx.beginPath();
     ctx.arc(850,75,70,0,2*Math.PI);
     ctx.stroke();
     ctx.fillStyle = "blue";
     ctx.fill();


});
