let trunkLength = 100;
let coralBranchAngle = 30;
let coralLengthReduction = 0.7;
let branchThickness = 5; // Grosor de las ramas
let generationSlider;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  strokeWeight(branchThickness); // Establecer el grosor de las ramas

  // Crear un deslizador para controlar la generación de ramas
  generationSlider = createSlider(1, 10, 1);
  generationSlider.position(10, height + 10);
  generationSlider.input(generateCoral);
}

function draw() {
  background(220);
  translate(width / 2, height);
  stroke(100, 100, 255); // Color del coral
  generateCoral();
}

function generateCoral() {
  let generations = generationSlider.value();
  branch(trunkLength, 0, generations);
}

function branch(len, angle, generations) {
  if (generations > 0) {
    line(0, 0, 0, -len);
    translate(0, -len);
    for (let i = 0; i < 2; i++) {
      let branchAngle = random(-coralBranchAngle, coralBranchAngle);
      push();
      rotate(angle + branchAngle);
      branch(len * coralLengthReduction, angle + branchAngle, generations - 1);
      pop();
    }
  }
}
