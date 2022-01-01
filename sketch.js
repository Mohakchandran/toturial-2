
function setup() {
  createCanvas(400,400);
  background("purple");
  box = createSprite(200,200,30,30);

  var box2
box.createSprite = (200,200,40,40)
box.shapeColor = "golden"

createEdgeSprites()
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +10
    
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x = box.position.x -10
    
  }
  if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y -10
    
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y +10
    
  }
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

