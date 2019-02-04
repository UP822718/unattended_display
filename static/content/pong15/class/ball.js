"use strict";
var Ball = class Ball extends Thing {
    constructor(id, x,y, xspeed, yspeed) {
        super(id, x, y);
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    flip() {
        this.xspeed = -this.xspeed;
    }

    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    updateScreen() {
        this.elem.setAttribute("cx", this.x);
        this.elem.setAttribute("cy", this.y);
    }


    static newSpeed() {
        return Math.floor(Math.random()*50)-25;
    }

    resetBall() {
        this.x = 700 + Math.random()*200;
        this.y = 350 + Math.random()*200;
        this.xspeed = Ball.newSpeed();
        while (Math.abs(this.xspeed)<3) {
            this.xspeed = Ball.newSpeed();
        }
        this.yspeed=Ball.newSpeed();
        while (Math.abs(this.yspeed)<1) {
            this.yspeed =  Ball.newSpeed();
        }
    }
};
