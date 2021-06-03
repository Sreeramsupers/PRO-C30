const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(890,180,250,10);

  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  // Polygon
  polygon = new Polygon(50,200,40);

  sling = new SlingShot(polygon.body,{x:100,y:200});

  // 2nd stage blocks
  block2nd1 = new Block(800,150,30,40)
  block2nd2 = new Block(830,150,30,40)
  block2nd3 = new Block(860,150,30,40)
  block2nd4 = new Block(890,150,30,40)
  block2nd5 = new Block(920,150,30,40)
  block2nd6 = new Block(950,150,30,40)
  block2nd7 = new Block(980,150,30,40)

  // level 2
  block2nd8  = new Block(830,120,30,40)
  block2nd9  = new Block(860,120,30,40)
  block2nd10 = new Block(890,120,30,40)
  block2nd11 = new Block(920,120,30,40)
  block2nd12 = new Block(950,120,30,40)

  // level 3
  block2nd13 = new Block(860,90,30,40)
  block2nd14 = new Block(890,90,30,40)
  block2nd15 = new Block(920,90,30,40)

  // top
  block2nd16 = new Block(890,60,30,40)
  




  


  

}
function draw() {
  background(56,44,44); 

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,20)
  

  polygon.display();
  sling.display();

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(1);
  stroke(15);
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  
  fill("grey");
  block16.display();

  // 2nd Blocks and stand
  strokeWeight(1);
  stroke(1);
  
  fill("lightblue")
  block2nd1.display();
  block2nd2.display();
  block2nd3.display();
  block2nd4.display();
  block2nd5.display();
  block2nd6.display();
  block2nd7.display();
  
  fill("pink")
  block2nd8.display();
  block2nd9.display();
  block2nd10.display();
  block2nd11.display();
  block2nd12.display();

  fill("turquoise")
  block2nd13.display();
  block2nd14.display();
  block2nd15.display();

  fill("grey")
  block2nd16.display();



}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body)
  }
}

