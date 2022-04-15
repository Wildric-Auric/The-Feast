var last = 0;
var current = 0;
var updateDTime = 5.00; //seconds
var shownDTime = deltaTime;


var nietTxt = new Text(2);
var shophauerTxt = new Text(2);
shophauerTxt.name = "Schopenhauer:";
nietTxt.name = "Nietsche:";

nietTxt.voice = sounds[0]
shophauerTxt.voice = sounds[1]

nietTxt.animation = animators[0];
shophauerTxt.animation = animators[1];

var scene = new Scene();
scene.philosophers = [nietTxt, nietTxt,shophauerTxt, nietTxt, shophauerTxt, nietTxt, shophauerTxt, nietTxt, shophauerTxt, shophauerTxt, nietTxt, shophauerTxt ];
scene.sentences = [
                    "God is Dead! God is Dead!",
                    "Fool of us! Fool of us who had killed him. What remains of a world with no being to worship...",
                    "Hold on, hold on Fred...",
                    "What will remain of human? is Ubermeinch achievable?",
                    "Fred what God are you talking about? Humans were never driven by values nor supreme will, we were driven by nature and out misery, not less nor more...",
                    "Ah Arhur, I pity you...",
                    "I'm pretty shoked.",
                    "You still philosophize is such a miserable way. I pity you Arthur...",
                    "I understand your pity, don't repeat it over and over again. Not to mention your philosophy is an eternal repetition of chocking ideas getting you famous",
                    'Not to mention the ease to abandon them when the natural pressure increases... "Hello stupid folk, Zarathoustra is only fruit of sarcasm".',
                    "Pretty strange critic about shoking idea from a being who believes live has given us no choice but to commit suicide",
                    "At least I did not abandon this idea..."
                ]
scene.isActive = 1



//Called once in every game
function Start() {
    for (let i = 0; i < sprites.length; i++) {
            sprites[i].size = {
                x: sprites[i].size.x,
                y:  sprites[i].size.x*animators[i].images[0].naturalHeight/animators[i].images[0].naturalWidth
            }
    }

    for (let i = 0; i < animators.length; i++) {
        animators[i].images[2] =  animators[i].images[0];
        animators[i].images[4] =  animators[i].images[0];
      }
}

let started = 0;
//Called every frame
function MainLoop() {
    window.requestAnimationFrame(MainLoop)
    //Fill background
    context.fillStyle = BGCOLOR;
    context.fillRect(0,0, canvas.width, canvas.height)

    //Draw shapes
    if (hasLoaded < TOTAL_RES) {
        context.fillStyle = "#ffffff"
        context.fillText("Loading...", 20,20);
    }
    else if (!started) {
        Start();
        started = 1;
    }
    scene.Update();
    player.Update();  
    nietAnimator.Update();

    //temp solution
    shopperSprite.Draw() ; 
    shopperAnimator.Update();
    //-----
    context.fillStyle = "white";

    //FPS
    updateDTime -= deltaTime;
    if (updateDTime < 0) {
        shownDTime = deltaTime;
        updateDTime = 5.00;
    }
    context.fillStyle = "#ffffff"
    context.fillText(shownDTime.toFixed(3), 20,20);
    current = new Date().getTime()/1000;
    deltaTime = current - last;
    last = current
}
MainLoop()



// canvas.addEventListener('click', event => { 
//     if(event.type == "mousedown")

// })