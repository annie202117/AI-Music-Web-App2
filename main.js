heading = "";

song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("electro-summer-positive-party-141081.mp3");
    song2 = loadSound("tropical-summer-music-112842.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    
      document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
    }