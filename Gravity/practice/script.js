let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined
};

let maxRadius = 40;
let minRadius = 5;

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(mouse);
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let colorArray = [
    "#1f306e",
    "#1f306e",
    "#8f3b76",
    "#c7417b",
    "#c7417b",
];

function Ball(x, y, dy, radius, gravity, friction) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = dy;
    this.gravity = gravity
    this.friction = friction;

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'pink'; // Set color to blue for example
        c.fill();
        c.closePath();
    };

    this.animate = () => {
        c.clearRect(0, 0, innerWidth, innerHeight);
        this.draw();
        this.y += this.dy;
        requestAnimationFrame(this.animate);
        if (this.y + this.radius > canvas.height) { // Check if the ball reaches top or bottom boundary
            this.dy = -this.dy * this.friction;
        } else {
            this.dy+=this.gravity;
        }
    };

}

let x = 500;
let y = 100;
let dy = 1;
let radius = 50;
let gravity = 0.5;
let friction = 0.9;
let ball = new Ball(x, y, dy, radius, gravity, friction);
ball.animate();
ball.activateGravity();
