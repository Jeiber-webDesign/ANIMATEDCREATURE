let x = 100;
let ellipseSize= 50;
let yPos = 0;
let sunSize = 0;


function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(225, 227, 225);

  //Body
  fill(228, 220, 218);
  rect(200, 100, 400, 400);

  //Eyes
  fill(255, 255, 255);
  ellipse(300, 200, 60, 60);
  ellipse(300, 200, 40, 40);
  ellipse(494, 200, 60, 60);
  ellipse(494, 200, 40, 40);
  
  //Sun 
  fill(255,238,0)
  ellipse(100, yPos+175, sunSize+60);
  yPos = yPos - 1;
  sunSize = sunSize +0.25;

  //Arms
  fill(26, 23, 17);
  triangle(100, 500, 200, 260, 200, 500);
  triangle(600, 260, 600, 500, 700, 500);

  //Legs
  fill(26, 23, 17);
  rect(200, 500, 160, 200);
  rect(450, 500, 150, 200);

  //Front of Head
  triangle(205, 100, 400, 125, 595, 100);

  //Beak
  fill(204, 151, 29);
  triangle(340, 240, 400, 370, 460, 240);

  //Stomach
  fill(255, 255, 255);
  ellipse(400, 450, 100, 100);

  //Ground
  fill(255, 255, 255);
  rect(0, 700, 800, 100);
}
