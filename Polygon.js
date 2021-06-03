class Polygon {
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.3,
            'density':1.0,
        }
        this.x = x
        this.y = y;
        this.r = r
        polygon_img = loadImage("polygon.png")

        this.body = Bodies.circle(this.x,this.y,(this.r-0.5)/1,options)
        World.add(world, this.body);

        }

        display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, 0,0,this.r,this.r);
        pop();
        }
    };
    