const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var poly1;
var gro1, gro2;
var box1, box2, box3, box4, box5;
var rope1;

function preload()
{
    
}


function setup()
{
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;

  poly1 = new Poly(79, 200, 60);
  //ground objects
  gro1 = new Ground(412,318,300,10);
  gro2 = new Ground(780,189,200,10);
  gro3 = new Ground(600,390,1200,10)

  rope1 = new Rope(poly1.body,{x:109, y:200})

       //Ground 101
  //box objects lvl 1
  box1 = new Box(780,170,30,30);
  box2 = new Box(747,170,30,30);
  box3 = new Box(714,170,30,30);
  box4 = new Box(813,170,30,30);
  //box objects lvl 2
  box5 = new Box(732,139,30,30);
  box6 = new Box(766,139,30,30);
  box7 = new Box(789,139,30,30);
  //box objects lvl 3
  box8 = new Box(743,93,30,30);
  box9 = new Box(773,93,30,30);
  //box objects lvl 4
  box10 = new Box(759,73,30,30);

         //Ground 102
  //box objects lvl 1
  box11 = new Box(415,295,30,30);  
  box12 = new Box(447,295,30,30);   
  box13 = new Box(480,295,30,30); 
  box14 = new Box(378,295,30,30);  
  box15 = new Box(359,295,30,30); 
  //box objects lvl 2
  box16 = new Box(363,265,30,30);
  box17 = new Box(396,265,30,30);
  box18 = new Box(424,265,30,30);
  box19 = new Box(460,265,30,30);
  //box objects lvl 3
  box20 = new Box(374,238,30,30);
  box21 = new Box(404,238,30,30);
  box22 = new Box(438,238,30,30);
  //box objects lvl 4
  box23 = new Box(388,206,30,30);
  box24 = new Box(418,206,30,30);
  //box objects lvl 5
  box25 = new Box(396,172,30,30);

}

function draw()
{
 background("violet")
 
 rope1.display();
 poly1.display();
//grnd
 gro1.display();
 gro2.display();  
 gro3.display();

       //bocks platform 2
//bocks lvl 1
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 //bocks lvl 2
 box5.display();
 box6.display();
 box7.display();
 //bocks lvl 3
 box8.display();
 box9.display();
 //bocks lvl 4
 box10.display();

       //bocks platform 2
 //bocks lvl 1
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 //bocks lvl 2
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 //bocks lvl 3
 box20.display();
 box21.display();
 box22.display();
 //bocks lvl 4
 box23.display(); 
 box24.display();
 //bocks lvl 5
 box25.display();
 

 console.log("mousex"+mouseX)
 console.log("mousey"+mouseY)
}

function mouseDragged()
{
  Matter.Body.setPosition(poly1.body, {x:mouseX, y:mouseY})  
}

function mouseReleased()
{
   rope1.fly();

}

function keyPressed()
{
    if(keyCode === 32)
    {
        rope1.attach(poly1.body)
    }

  }