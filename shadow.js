function setup () {
    const shadowCanvas = createCanvas(windowWidth, windowHeight);
    shadowCanvas.parent("shadow-div");
}   

function draw () {
    noStroke();
    fill(paintColor);
    ellipse(mouseX, mouseY, radius, radius);
}   

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}