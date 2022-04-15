var Inputs = {
    mouse: {
        x: 0,
        y: 0
    },

    keys: {
        d: 0,
        q: 0,
        z: 0,
        s: 0,
        right: 0,
        left: 0,
        up: 0,
        down: 0,
        c: 0,
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            Inputs.keys.d = 1
            break;
        case 'q':
            Inputs.keys.q = 1
            break;
        case 'z':
            Inputs.keys.z = 1
            break;
        case 's':
            Inputs.keys.s = 1
            break;
        case 'c':
            Inputs.keys.c = 1
            break;
        case 'v':
            Inputs.keys.v = 1
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            Inputs.keys.d = 0
            break;
        case 'q':
            Inputs.keys.q = 0
            break;
        case 'z':
            Inputs.keys.z = 0
            break;
        case 's':
            Inputs.keys.s = 0
            break;
        case 'c':
            Inputs.keys.c = 0
            break;
        case 'v':
            Inputs.keys.v = 0
            break;
    }
})

canvas.addEventListener("mousemove", function(e) { 
    temp = canvas.getBoundingClientRect();
    Inputs.mouse.x = e.clientX - temp.left;
    Inputs.mouse.y = e.clientY - temp.top;
})