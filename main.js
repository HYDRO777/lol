function preload(){
    
}



function setup(){
    canvas = createCanvas(640,320);
    canvas.center();
}


function draw(){
    stroke("red");
    fill("red");
    rect(1, 290, 640, 30);
    rect(1, 1, 640, 30);
    rect(1, 1, 30, 320);
    rect(610, 1, 30, 320);
    stroke("green");
    fill("green");
    circle(1, 1, 87);
    circle(641, 1, 87);
    circle(1, 322, 87);
    circle(637, 322, 87);
}