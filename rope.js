class Rope
{
    constructor(body1, point2)
    {
      var options = {
                      bodyA:body1,
                      pointB:point2,
                      stiffness:0.2,
                      length:50
                    }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display()
    {
        if(this.rope.bodyA!=null)
        {
        var firstpos = this.rope.bodyA.position
        var secpos = this.rope.pointB
        push()
              strokeWeight(10)
              line(firstpos.x, firstpos.y, secpos.x, secpos.y)
        pop();
        
        }
             
    }
    
    fly()
    {
        this.rope.bodyA = null;
    }

    attach(body12)
    {
      this.rope.bodyA = body12;
    }


}


