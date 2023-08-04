var canvas = document.getElementById('circles'), ctx = canvas.getContext('2d');

// initial canvas size
var cw = window.innerWidth;
var ch = window.innerHeight;
canvas.width = cw;
canvas.height = ch;

// Array to store circles
const circles = [];

//Make an array of circles
function createCircles() {
    let x = 25;
    let y = 25;

    while (y <= ch) {
        while(x <= cw) {
            drawCircle(x, y, 20);
            // Add to array
            circles.push({ x, y, radius: 20 });
            x += 50;
        }
        x = 25;
        y += 50;
    }
}

// Initial Circles
createCircles();


// Change circle size from mouse distance
function updateCircles(event) {
    const rect = canvas.getBoundingClientRect();
    const mX = event.clientX - rect.left;
    const mY = event.clientY - rect.top;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through all circles
    circles.forEach(circle => {
        const distance = Math.sqrt((mX - circle.x) ** 2 + (mY - circle.y) ** 2);

        circle.radius = distance / 10;

        if (circle.radius > 20){
            circle.radius = 20;
        }

        // redraw circles
        drawCircle(circle.x, circle.y, circle.radius);
    });
}


// Important Code Bellow
// Do NOT Touch
function drawCircle(x, y, radius) {
    //fill color
    ctx.fillStyle = "#71797E";

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function updateSize() {
    var cw = window.innerWidth;
    var ch = window.innerHeight;
    
    canvas.width = cw;
    canvas.height = ch;

    createCircles();
}

window.addEventListener('mousemove', updateCircles);
window.addEventListener('resize', updateSize);
