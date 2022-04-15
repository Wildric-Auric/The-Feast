/*
Info arrays:
sprite: contains sprites
animators: contains animators
sounds: contains sounds

order:
Player: 0
Shopper: 1

*/



//Initializing sprites

PlayerSprite = new Sprite(
    {
        position: 
        {
            x: 0,
            y: 0
        },
        rotation: 0,
        color: 'blue',
        image: new Image(),
        size: 
        {
            x: 200,
            y: 000
        }
    });

shopperSprite = new Sprite(
    {
        position: 
        {
            x: 100,
            y: 100
        },
        rotation: 0,
        color: 'blue',
        image: new Image(),
        size: 
        {
            x: 200,
            y: 000
        }
    })


var sprites = [PlayerSprite, shopperSprite]
player = new Player(PlayerSprite);


//Initializing animators

nietAnimator = new Animator(2, 3, PlayerSprite);
shopperAnimator = new Animator(2,3, shopperSprite);

var animators = [nietAnimator, shopperAnimator] //Maybe use static for this if it exists in js

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < animators.length; j++) {
      animators[j].images.push(new Image());
    }
    

}


//Load sprite image
var hasLoaded = 0;
for (let i = -1; i < 3; i++) {
    k = 0
    if (i > -1) k = 2*i+1
    for (let j = 0; j < animators.length; j++)
    {
        animators[j].images[k].onload = function()
            {
                hasLoaded += 1;
            }
    }
}

//Waiting for loading: should do this for all ressources

nietAnimator.images[0].src = "./assets/Nietsche/nietzsche-0000.png"
nietAnimator.images[1].src = "./assets/Nietsche/nietzsche-0001.png"
nietAnimator.images[3].src = "./assets/Nietsche/nietzsche-0002.png"
nietAnimator.images[5].src = "./assets/Nietsche/nietzsche-0003.png"

shopperAnimator.images[0].src = "./assets/Schopenhauer/schopenhauer-0000.png"
shopperAnimator.images[1].src = "./assets/Schopenhauer/schopenhauer-0001.png"
shopperAnimator.images[3].src = "./assets/Schopenhauer/schopenhauer-0002.png"
shopperAnimator.images[5].src = "./assets/Schopenhauer/schopenhauer-0003.png"


shopperVoice = new Audio('assets/snd.wav')
nietVoice = new Audio('assets/triangle.ogg')

var sounds = [nietVoice, shopperVoice];
// for (let i = 0; i < sounds.length; i++) {
//     sounds[i].onload = function() {
//         hasLoaded += 1
//     }
// }
// shopperVoice.src = 'assets/snd.wav'
// nietVoice.src = 'assets/triangle.ogg'

 
var TOTAL_RES = 8