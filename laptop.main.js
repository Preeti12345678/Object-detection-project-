img="";
status="";
object_detector="";
function preload(){
    img=loadImage('laptop.jpeg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(400,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="status =Detecting Objects ";
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