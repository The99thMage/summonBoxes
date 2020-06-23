class Box{
    constructor(x, y, width, height){
        var option = random(1, 2);
        if(option < 1.5){
            var box_options = {
                timeScale: 1.25,
                mass: 5
            }
        }else{
            var box_options = {
                timeScale: 0.25
            }
        }

        this.body = Bodies.rectangle(x, y, width, height, box_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}