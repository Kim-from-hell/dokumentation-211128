function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('dots');
  let a = 0;
}

function draw() {
  background(0);
  
  let wave= sin(radians(frameCount*2));
  let blue= cos(radians(frameCount*2));
  

  noStroke()
  fill('red')
  ellipse (width/2 + wave*300 ,height/2,100,100);
  
  fill('blue')
  ellipse (width/2 + blue*300 ,height/2,200,200);
  
  fill('yellow')
  ellipse (200 + blue*100 ,200,150,150);

}