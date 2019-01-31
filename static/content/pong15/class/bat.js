"use strict";
var Bat = class Bat extends Thing {
    constructor(id, x,y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }

    intersectsWith(x,y) {
        return (x>this.x) && (x<this.x+this.width) && (y>this.y) && (y<this.y+this.height);
    }

};
