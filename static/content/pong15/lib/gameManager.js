var bb = new Ball("b2", 500,300,10,10),
    l = new Bat("lbat", 0, 300, 50, 300),
    r = new Bat("rbat", 1550, 300, 50, 300),
    things = {
        balls: [ bb ],
        bats: { l, r }
    },

    step = function() {
        bb.move();
        bb.updateScreen();
        checkCollisions(things);
        window.requestAnimationFrame(step);
    };


window.addEventListener("load", step);
