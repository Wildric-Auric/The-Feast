class Text {
    constructor(duration) {
        this.duration = duration;
        this.isActive = 0;
        this.counter = 0.0;
        this.string = "";
        this.shownString = "";
        this.current = 0;
        this.name = "";
        this.voice = new Audio('assets/triangle.ogg');
        this.animation;


    }
    
    Clear() {
        this.isActive = 0;
        this.counter = 0.0;
        this.string = "";
        this.shownString = "";
        this.current = 0;
    }

    Update() {
        let delta = this.duration/this.string.length;
        if (this.current>=this.string.length) {
            if (this.animation != undefined) {
                this.animation.isPlaying = 0;
            }
            this.isActive = 0;
            return
            
        }
        this.counter += deltaTime;
        if (this.counter >= delta) {
            this.counter = 0;
            this.shownString += this.string[this.current];
            this.current +=1;
            this.voice.playbackRate = 1.0;
            this.voice.play();
        }
    }
}