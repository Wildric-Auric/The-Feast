
let t = 0.0;
let dur = 0.05;
let sign = 1;

class Player {
    constructor(sprite) {
        this.sprite = sprite
        this.speed = {
            x: 10,
            y: 10

        }
    }
    Update() {
        let move = {
            x: (Inputs.keys.d) - (Inputs.keys.q),
            y: (Inputs.keys.s) - (Inputs.keys.z)
        }
        this.sprite.position.x += move.x*this.speed.x;
        this.sprite.position.y += move.y*this.speed.y;
        
        this.sprite.Draw();
        t+=deltaTime;
        if (t>dur) {    
            t=0.0;
            sign = -sign;
            this.sprite.rotation = 5*sign;
        }
        if (move.x == 0 && move.y == 0) this.sprite.rotation = 0
    }
}