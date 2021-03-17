let radiusView = document.getElementById("radius-view");

function handleRadius(newRadius) {
    radius = newRadius;
    radiusView.style = `width: ${newRadius}; height: ${newRadius};`;
}

let brushElement = document.getElementById("brush");
let eraserElement = document.getElementById("eraser");
let selectedTool = "brush";

brushElement.addEventListener("click", function () {
    selectedTool = "brush";
    brushElement.style = `transform: scale(1.5)`;
    eraserElement.style = `transform: scale(1)`;
});
eraserElement.addEventListener("click", function () {
    selectedTool = "eraser";
    eraserElement.style = `transform: scale(1.5)`;
    brushElement.style = `transform: scale(1)`;
});