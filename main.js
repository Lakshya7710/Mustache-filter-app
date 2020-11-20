nose_x=0;
nose_y=0;


function preload(){
    mustache=loadImage("https://i.postimg.cc/HkDwDRbs/unnamed.png");
}

function setup(){
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
     video.hide();
     posenet=ml5.poseNet(video,modelLoaded);
     posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-45;
        nose_y=results[0].pose.nose.y-45;

    }
}

function modelLoaded(){
    console.log("model loaded");
}

function draw(){
    image(video,0,0,450,450);
    image(mustache,nose_x,nose_y+30,90,60);
}