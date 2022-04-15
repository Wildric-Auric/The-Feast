class Sprite {
    constructor( {position, rotation, size, color, image=null } ) {
        this.position = position;
        this.rotation = rotation;
        this.size = size;
        this.color = color;
        this.image = image;
    }

    Draw() {
        if (this.image==null) {
            context.fillStyle = this.color;
            context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
            context.fillStyle = '#000000';
        }
        else {
            let rot = this.rotation*Math.PI/180.0;

            let i = this.position.x + this.size.x*0.5;
            let j = this.position.y + this.size.y*0.5;

            context.translate(i, j)
            context.rotate(rot);
            context.translate(-i,-j);
            //Applying rotation matrix on the image
            // let xx = this.position.x*Math.cos(rot)  + this.position.y*Math.sin(rot);
            // let yy = -this.position.x*Math.sin(rot) + this.position.y*Math.cos(rot);
            //No need if I want to change pivot it's better to transform all this into matrices multiplication
            context.drawImage(this.image, this.position.x,  this.position.y, this.size.x, this.size.y);

            context.translate(i,j);

            context.rotate(-rot);

            context.translate(-i, -j);

        }
        
    }
}