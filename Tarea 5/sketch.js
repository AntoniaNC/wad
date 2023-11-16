let frutillas = [];
let cantidadFrutillas = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 192, 203); // Fondo rosa pastel

  for (let i = frutillas.length - 1; i >= 0; i--) {
    frutillas[i].mostrar();
    frutillas[i].mover();

    // Verificar si las frutillas están fuera de la pantalla
    if (frutillas[i].x < -frutillas[i].tamano || frutillas[i].x > width + frutillas[i].tamano || frutillas[i].y < -frutillas[i].tamano || frutillas[i].y > height + frutillas[i].tamano) {
      frutillas.splice(i, 1); // Eliminar la frutilla si está fuera de la pantalla
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < cantidadFrutillas; i++) {
    frutillas.push(new Frutilla(mouseX, mouseY));
  }
}

class Frutilla {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = random(-2, 2);
    this.velY = random(-2, 2);
    this.tamano = random(20, 50);
    this.colorFruta = color(255, 0, 0); // Color de la fruta (rojo)
    this.colorHoja = color(0, 255, 0); // Color de la hoja (verde)
  }

  mostrar() {
    noStroke();

    // Hojas de la frutilla
    fill(this.colorHoja);
    ellipse(this.x, this.y - this.tamano * 0.7, this.tamano * 0.6, this.tamano * 0.6);
    ellipse(this.x - this.tamano * 0.3, this.y - this.tamano * 0.5, this.tamano * 0.5, this.tamano * 0.5);
    ellipse(this.x + this.tamano * 0.3, this.y - this.tamano * 0.5, this.tamano * 0.5, this.tamano * 0.5);

    // Fruta (cuerpo de la frutilla) con óvalo más largo hacia abajo
    fill(this.colorFruta);
    ellipse(this.x, this.y + this.tamano * 0.2, this.tamano * 1.5, this.tamano * 1.2);
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;
  }
}
