img="";
status="";
object_detector="";
function preload(){
    img=loadImage('TV and painting.jpeg');
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.position(500,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="status =Detecting Objects ";
}
function draw(){
  image(img,0,0,350,350);
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    object_detector.detect(img, gotResults);
  }
  function gotResults(error,results){
    if(error){
      console.log(error);
    }
    console.log(results);
  
  }