const text = document.querySelector("p");
console.log(text);



//function that controls moving text
setInterval(function moveText() {
    context.fillStyle = "green";

    context.fillRect(0, 0, canvas.width, canvas.height);

    posX += dx;
    posY += dy;

    if (posX >= canvas.width) {
        dx = 0;
        posX = canvas.width;
    }
    if (posX < 0) {
        dx = 0;
        posX = 0;
    }
    if (posY > canvas.height) {
        dy = 0;
        posY = canvas.height;
    }
    if (posY < 0) {
        dy = 0;
        posY = 0;
    }

    context.fillStyle = "white";
    context.font = "bold 26px Calibri";
    context.fillText("Call Us today at 517-555-5392", posX, posY);


}, 20)