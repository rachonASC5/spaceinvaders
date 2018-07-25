function setup() {
  
    createCanvas(700, 700);
    
   
}
x = 450;
y = 600;
s = 580;
l = 480;
v = 580;

function draw() {
    background("black");

    var v = 'Score';
    textSize(32);
    fill("green");
    text(v, 10, 10, 300, 300);
    var v = 'lives';
    textSize(32);
    fill("green");
    text(v, 450, 10, 300, 300);
    fill('green');
    rect(525,10,50,50);
    fill('green');
    rect(600,10,50,50);
   
    fill("white");
    ellipse(125, 200, 50, 50);
    fill("white");
    ellipse(225, 200, 50, 50);
    fill("white");
    ellipse(325, 200, 50, 50);
    fill("white");
    ellipse(425, 200, 50, 50);
    fill("white");
    ellipse(525, 200, 50, 50);
    fill("white");
    ellipse(625, 200, 50, 50);

    if (keyIsDown(LEFT_ARROW)) {
        x -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x += 10;
    }

    fill("green");
    rect(x, y, 75, 75);
    
    if (keyIsDown(LEFT_ARROW)) {
        l -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        l += 10;
    }

    if (keyIsDown(SHIFT)) {
        s -= 10;
    }
    fill("green");
    rect(l, s, 15, 20);
}
