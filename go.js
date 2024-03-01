var objectDector="";
var immage="";
var objects=[];
var status="";
var keep="";

function preload() {
immage=loadImage("misha bebe.jpg"); 
}

function setup() {
 canvas=createCanvas(500,500);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(500,500);
 video.hide();   
}

function examen() {
 console.log("si se cargo yupii");
 status=true;  
}
function boton() {
objectDector=ml5.objectDetector("cocossd", examen);
keep=document.getElementById("polo").value;
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

                if (object[i].label==keep) {
               video.stop();
               objectDector.detect(soy_añañi);
  
               synth = window.speechSynthesis;
                utterThis = new SpeechSynthesisUtterance(keep + "encontrado");
                 synth.speak(utterThis);

                }
                  } 

    }     
}
