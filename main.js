canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseevent="empty"
var lastpositionofx,lastpositionofy
var color="blue"
var widthofline =7
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
color=document.getElementById("color").value
widthofline=document.getElementById("widthofline").value
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
currentpositionofmousex=e.clientX-canvas.offsetleft
currentpositionofmousey=e.clientY-canvas.offsettop
if(mouseevent=="mousedown"){
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=widthofline
ctx.moveTo(lastpositionofx,lastpositionofy)
ctx.lineTo(currentpositionofmousex,currentpositionofmousey)
ctx.stroke()
}
lastpositionofx=currentpositionofmousex
lastpositionofy=currentpositionofmousey
}