class Animator {
    constructor(duration, timeNum, sprite) {
        this.images = [];
        this.duration = duration;
        this.counter = duration;
        this.sprite = sprite;
        this.current = 0;
        this.default = 0;
        this.isPlaying = 0;
        this.timeNum = timeNum;
    }
    Update() {
        if (this.isPlaying) {
            let delta = this.duration/(this.images.length*this.timeNum);
            this.counter += deltaTime;
            if (this.counter >= delta) {
                this.counter = 0;
                this.current = (this.current+1)%this.images.length;
                this.sprite.image = this.images[this.current]
            }
        }
        else this.sprite.image = this.images[this.default];
    }
}