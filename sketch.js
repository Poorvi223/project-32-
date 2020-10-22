const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var ground,stand1,stand2,box;
var score = 0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world; 
  Engine.run(engine);

  ground = new Ground(400,390,800,30);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);

  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);

  box9 = new Box(390,155,30,40);

  boxs1 = new Box(640,175,30,40);
  boxs2 = new Box(670,175,30,40);
  boxs3 = new Box(700,175,30,40);
  boxs4 = new Box(730,175,30,40);
  boxs5 = new Box(760,175,30,40);

  boxs6 = new Box(670,135,30,40);
  boxs7 = new Box(700,135,30,40);
  boxs8 = new Box(730,135,30,40);

  boxs9 = new Box(700,95,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background("brown");  

  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("green");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(15);
  text("Press Space to get a second Chance to Play!!",500 ,350);
  
  ground.display();
  stand1.display();
  stand2.display();
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("yellow");
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();
  fill("turquoise");
  boxs6.display();
  boxs7.display();
  boxs8.display();
  fill("pink");
  boxs9.display();
  fill("gold");

  slingshot.display();
  ellipseMode(RADIUS)
  ellipse(polygon.position.x,polygon.position.y,20,20);

  text("score : "+score,720,40);
 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  boxs1.score();
  boxs2.score();
  boxs3.score();
  boxs4.score();
  boxs5.score();
  boxs6.score();
  boxs7.score();
  boxs8.score();
  boxs9.score();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Massachusetss/NewYork");
  var responsejson = await response.json()
  var datetime = responsejson.datetime
  var hour = datetime.slice(11,13)
  console.log(hour);
  if(hour>=6 && hour<18){
     bg = "lightblue"
  }
  else{
      bg = "darkblue"
  }
  backgroundImg = loadImage(bg);
}