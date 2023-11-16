let x = 50;
let y = 150;
let angle = 0;
let speed = 0.5; // Velocidad de movimiento de la mariposa

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(173, 216, 230); // Fondo azul pastel
  fill(255);
  textSize(32); // Tamaño de texto más grande
  text("Bienvenidos a mi página web", 20, 50); // Título más grande

  // Mover la mariposa por toda la página
  x += speed;
  if (x > width + 20) {
    x = -20;
  }

  // Cuerpo de la mariposa
  fill(255, 192, 203);
  triangle(x, y, x + 20, y - 30, x + 40, y); // Mariposa triangular

  // Alas de la mariposa
  let wingSize = 30;
  let wingAngle = sin(angle) * 45;

  push();
  translate(x + 20, y - 15);
  rotate(radians(wingAngle));

  fill(255, 255, 0);
  triangle(-wingSize, 0, 0, -wingSize * 2, wingSize, 0);
  pop();

  angle += 0.1; // Cambio en el ángulo para el movimiento de las alas
}
