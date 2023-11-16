let isPlaying = false; // Variable para controlar el estado de reproducción

function setup() {
    createCanvas(1420, 750);
    noLoop(); // Evita que la animación se repita continuamente
}

function draw() {
    // Dibuja el fondo de rombos primero
    background(255, 209, 220); // Fondo blanco

    let rows = 20;
    let cols = 20;
    let spacing = 80;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = j * spacing;
            let y = i * spacing;
            drawRhombus(x, y, 40); // Tamaño de los rombos
        }
    }

    // Luego, dibuja un rectángulo blanco en el centro del lienzo
    let centerX = width / 2;
    let centerY = height / 2;
    let rectWidth = 400; // Ancho del rectángulo (mayor)
    let rectHeight = 600; // Alto del rectángulo (mayor)
    fill(255); // Color blanco
    rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);

    // Dibuja un "vinilo" en el centro del rectángulo
    let vinylDiameter = 350; // Diámetro del vinilo (mayor)
    fill(0); // Color negro
    ellipse(centerX, centerY, vinylDiameter);

    // Dibuja las circunferencias grises de menor a mayor tamaño dentro del círculo negro
    let numCircles = 16; // Cantidad de circunferencias grises
    let minRadius = 10; // Radio mínimo
    let maxRadius = (vinylDiameter / 2) - 5; // Radio máximo
    for (let i = 0; i < numCircles; i++) {
        let radius = map(i, 0, numCircles, maxRadius, minRadius);
        let angle = map(i, 0, numCircles, 0, TWO_PI);
        let x = centerX;
        let y = centerY;
        noFill();
        stroke(150); // Color gris
        ellipse(x, y, radius * 2);
    }

    // Dibuja un círculo pequeño de color blanco en el centro del "vinilo"
    let smallWhiteCircleDiameter = 80; // Diámetro del círculo pequeño (mayor)
    fill(255); // Color blanco
    ellipse(centerX, centerY, smallWhiteCircleDiameter);

    // Dibuja un círculo pequeño de color negro en el centro del "vinilo"
    let smallBlackCircleDiameter = 10; // Diámetro del círculo negro
    fill(0); // Color negro
    ellipse(centerX, centerY, smallBlackCircleDiameter);

    // Dibuja el botón "Play" dentro del rectángulo blanco y debajo del "vinilo"
    let playButtonWidth = 80;
    let playButtonHeight = 40;
    let playButtonX = centerX - playButtonWidth / 2;
    let playButtonY = centerY + vinylDiameter / 2 + 20;
    fill(255); // Color blanco
    rect(playButtonX, playButtonY, playButtonWidth, playButtonHeight);
    fill(0); // Color negro
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Play", playButtonX + playButtonWidth / 2, playButtonY + playButtonHeight / 2);

    // Escucha eventos de ratón para el botón "Play"
    if (mouseX > playButtonX && mouseX < playButtonX + playButtonWidth && mouseY > playButtonY && mouseY < playButtonY + playButtonHeight) {
        cursor(HAND);
    } else {
        cursor(ARROW);
    }
}

function drawRhombus(x, y, s) {
    push();
    translate(x, y);
    fill("#EE9AC4"); // Color rosa
    noStroke(); // Elimina el trazo
    beginShape();
    vertex(10, -s);
    vertex(40, 0);
    vertex(10, s);
    vertex(-20, 0);
    endShape(CLOSE);
    pop();
}

function mousePressed() {
    // Verifica si se hizo clic en el botón "Play"
    let playButtonWidth = 80;
    let playButtonHeight = 40;
    let playButtonX = width / 2 - playButtonWidth / 2;
    let playButtonY = height / 2 + vinylDiameter / 2 + 20;
    if (mouseX > playButtonX && mouseX < playButtonX + playButtonWidth && mouseY > playButtonY && mouseY < playButtonY + playButtonHeight) {
        isPlaying = !isPlaying;
        redraw();
    }
}
