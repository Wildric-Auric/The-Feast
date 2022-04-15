const canvas = document.querySelector('canvas')
const textZone = document.getElementsByClassName("textZone");
const nameField = document.getElementsByClassName("nameField");
const context = canvas.getContext('2d');
const w = 1024;
const h = 576;
var deltaTime = 0.016;
var sceneObjects = [];
var BGCOLOR = "#2c3c42";

canvas.height = h;
canvas.width = w;
context.fillRect(0,0, canvas.width, canvas.height); //Top left 0,0