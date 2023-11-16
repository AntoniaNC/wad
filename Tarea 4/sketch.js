let shapes = [];

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(220);

  // Dibuja todas las formas en el arreglo
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].update();
  }
}

function mouseClicked() {
  // Crea una nueva forma en la posición del clic
  let shapeType = int(random(2)); // 0 = diamante, 1 = corazón
  let shape;
  if (shapeType === 0) {
    shape = new Diamond(mouseX, mouseY);
  } else {
    shape = new Heart(mouseX, mouseY);
  }
  shapes.push(shape);
}

class Diamond {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }

  display() {
    fill(255, 0, 0); // Rojo
    push();
    translate(this.x, this.y);
    rotate(PI / 4);
    rect(0, 0, this.size, this.size);
    pop();
  }

  update() {
    // Puedes hacer que los diamantes cambien con el tiempo, si lo deseas.
  }
}

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }

  display() {
    fill(255, 0, 0); // Rojo
    noStroke();
    beginShape();
    vertex(this.x, this.y - this.size);
    bezierVertex(this.x - this.size, this.y - this.size / 2, this.x - this.size / 2, this.y, this.x, this.y + this.size);
    bezierVertex(this.x + this.size / 2, this.y, this.x + this.size, this.y - this.size / 2, this.x, this.y - this.size);
    endShape(CLOSE);
  }

  update() {
    // Puedes hacer que los corazones cambien con el tiempo, si lo deseas.
  }
}

