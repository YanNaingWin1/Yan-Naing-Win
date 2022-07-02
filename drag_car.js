moveCar(document.getElementById("myCar"));

function moveCar(car) {
    var cp1 = 0, cp3 = 0;
    console.log("running!");
    if (car) {
        console.log("detected!");
        car.onmousedown = driveCar;
    }

    function driveCar(c) {
        c = c || window.Event;
        c.preventDefault();
        cp3 = c.clientX;
        document.onmousemove = dragCar;
        document.onmouseup = stopDrag;
    }

    function dragCar(c) {
        console.log("moving!");
        c = c || window.Event;
        c.preventDefault();
        cp1 = cp3 - c.clientX;
        cp3 = c.clientX;
        car.style.left = (car.offsetLeft - cp1) + "px";
    }

    function stopDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
