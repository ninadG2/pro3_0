class Box
{
    constructor(x, y, width, height)
    {
       var option ={ 
                     'restitution':0.5,
                   }
        this.body = Bodies.rectangle(x, y, width, height, option)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 5;
        this.visible = true;
    }   
    
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
      this.visible = false;

      if(this.body.speed>3)
    {
      World.remove(world,this.body)
      push()
      tint(255,this.visibility)
      this.visibility -=5;
      pop();
    }

    if(this.visible === true)
    {
      rect(pos.x, pos.y, this.width, this.height);
    }


      }
    };






