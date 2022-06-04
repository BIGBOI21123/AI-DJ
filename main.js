song = "";

function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(500, 450);
    canvas.position(700, 300)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 450);
}

function playsong() {
    song.play();
}