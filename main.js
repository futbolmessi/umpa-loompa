var objectDector="";
var immage="";
var objects=[];
var status="";

function preload() {
immage=loadImage("misha bebe.jpg"); 
}

function setup() {
 canvas=createCanvas(500,500);
 canvas.center();   
objectDector=ml5.objectDetector("cocossd", examen);
}

function examen() {
 console.log("si se cargo yupii");
 status=true;  
 objectDector.detect(immage,soy_añañi);
}

function soy_añañi(error,results) {
if (error) {
    console.log(error);
} else {
  console.log(results);  
  objects=results;
}
}

function draw() {
    image(immage,0,0,500,500);    
    if (status!="") {
             image(immage,0,0,500,500);    
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

function para_el_animal_llamado_David () {
 window.location="David.html"; 
}