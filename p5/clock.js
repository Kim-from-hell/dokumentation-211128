let myArray= []
let adding = true


  
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent ('jup')

  background(0, 0, 0);
  frameRate();
}

function draw() {
  background(0, 0, 0);
  
  stroke (0, 0, 255);
  strokeWeight(2);
  //fill (0,0,0)


  let wave= cos(radians(frameCount*2));
  let posx1= (height/2 + wave*300);
  
    myArray.unshift(posx1);
  

  for (let i = 0; i < 60;i+=1){
    line (myArray[i], height/2, width/2, 0);
    line (width/2, height, myArray[i], height/2);
  }
  

  
//if (frameCount = 200) {
 //  console.log(myArray.length)
 //}  
  

 
 
}