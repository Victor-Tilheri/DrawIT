const socket = io.connect("http://localhost:3000");
let paintColor = '#fefefe';
let radius = 20;

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(51);
}   

function mouseDragged() {
    noStroke();
    fill(selectedTool == "brush" ? paintColor : 51);
    ellipse(mouseX, mouseY, radius, radius);

    sendPaint();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function clearBoard() {
    background(51);
}

function sendPaint() {
    let data = {
        "position": {"x": mouseX, "y": mouseY},
        "radius": radius,
        "color": selectedTool == "brush" ? paintColor : 51
    }
    socket.emit("sendPaint", data);
}

socket.on("paint", function (paintData) {
    noStroke();
    fill(paintData.color);
    ellipse(paintData.position.x, paintData.position.y, paintData.radius, paintData.radius);
});