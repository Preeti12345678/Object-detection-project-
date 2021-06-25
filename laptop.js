img="";
status="";
object_detector="";
function preload(){
    img=loadImage('laptop.jpeg');
}
function setup(){
    canvas=createCanvas(300,400);
    canvas.position(550,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="status =Detecting Objects ";
}
function draw(){
  image(img,0,0,300,400);
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