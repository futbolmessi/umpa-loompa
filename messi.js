var objectDector="";
var objects=[];
var status="";

function preload() {
video=createVideo("ankara messi.mp4"); 
}

function setup() {
 canvas=createCanvas(500,500);
 canvas.center();
 video.size(500,500);
 video.hide();   
objectDector=ml5.objectDetector("cocossd", examen);
}

function examen() {
 console.log("si se cargo yupii");
 status=true;  
}

function soy_añañi(error,results) {
if (error) {
    console.log(error);
} else {
  console.log(results);  
  objects=results;
 video.loop();
 video.speed(1.1);
 video.volume(1.2);
}
}

function draw() {
    image(video,0,0,500,500);    
    if (status!="") {
        objectDector.detect(video,soy_añañi);
             for (var i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Estatus: objeto detectado";
          
                fill(255, 0, 0);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
        stroke(255, 0, 0);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                  }
    }     
}


function otra_pagina () {
    window.location="tortilla.html"; 
   }