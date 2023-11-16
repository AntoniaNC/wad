let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noiseSeed(1); // Establece una semilla para la función de ruido para obtener un comportamiento reproducible
}

function draw() {
  background(0); // Fondo negro

  // Crea un nuevo círculo y agrégalo a la matriz cada 20 frames
  if (frameCount % 20 === 0) {
    // Reduce gradualmente la opacidad de los círculos existentes
    for (let i = 0; i < circles.length; i++) {
      circles[i].reduceOpacity();
    }
    
    // Agrega un nuevo círculo con un color aleatorio y una duración de vida de 1 segundo
    const randomColor = color(random(255), random(255), random(255));
    circles.push(new Circle(randomColor, 60)); // 60 frames equivalen a 1 segundo a 60 FPS
  }

  // Itera sobre los círculos y muéstralos
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update();
    circles[i].display();

    // Elimina los círculos cuando han alcanzado su duración de vida
    if (circles[i].isExpired()) {
      circles.splice(i, 1);
    }
  }
}

class Circle {
  constructor(circleColor, lifespan) {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 10;
    this.speed = random(1, 3);
    this.alpha = 255; // Opacidad inicial
    this.noiseOffset = random(1000); // Un valor de offset de ruido aleatorio para variar el movimiento
    this.color = circleColor; // Color aleatorio
    this.lifespan = lifespan; // Duración de vida en frames
    this.frameCount = 0; // Contador de frames
  }

  update() {
    // Utiliza la función noise para modificar la posición del círculo de manera suave y aleatoria
    const noiseValueX = noise(this.noiseOffset);
    const noiseValueY = noise(this.noiseOffset + 1000);
    this.x = map(noiseValueX, 0, 1, 0, width);
    this.y = map(noiseValueY, 0, 1, 0, height);
    this.frameCount++;
  }

  display() {
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.radius * 2);
  }

  isExpired() {
    // Comprueba si el círculo ha alcanzado su duración de vida
    return this.frameCount >= this.lifespan;
  }

  reduceOpacity() {
    // Reduce la opacidad gradualmente
    this.alpha -= 2;
  }
}
