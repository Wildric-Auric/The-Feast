var nietAnimator = null;


class Scene {
    constructor() {
        //Mybe replace with dictionary
        this.isActive = 0
        this.senteces = [];
        this.philosophers = [];
        this.current = -1
    }
    Update() {
        if (this.isActive) {
            if (this.current == this.sentences.length) return
            if (Inputs.keys.c) {
                
                    if (this.current == -1) {
                        this.current +=1
                        if (this.current == this.sentences.length) return
                        
                        this.philosophers[this.current].Clear() ;

                        this.philosophers[this.current].string = this.sentences[this.current];
                        this.philosophers[this.current].isActive = 1;
                        this.philosophers[this.current].animation.isPlaying = 1;

                    }
                    else if (!this.philosophers[this.current].isActive) {
                        this.current +=1
                        if (this.current == this.sentences.length) return

                        this.philosophers[this.current].Clear();

                        this.philosophers[this.current].string = this.sentences[this.current];
                        this.philosophers[this.current].isActive = 1;
                    }

                    this.philosophers[this.current].animation.isPlaying = 1;


            }
            if (this.current == this.sentences.length) return
            if (this.current > -1) {
                textZone[0].innerHTML = this.philosophers[this.current].shownString;
                nameField[0].innerHTML = this.philosophers[this.current].name;
                this.philosophers[this.current].Update()
            }
        }
    }

}