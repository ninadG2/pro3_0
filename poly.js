class Poly
{
     constructor(x, y, radius)
     {
      var options ={
                     'restitution':0.3,
                   }
        this.body = Bodies.circle(x, y, radius, options)
        this.width = width;
        this.height = height;
        this.r = radius
        World.add(world, this.body)
        this.image = loadImage("polygon.png")
     }

     display()
     {
        var polyPos = this.body.position;
        imageMode(CENTER)
        image(this.image, polyPos.x, polyPos.y, this.r, this.r)
     }
}