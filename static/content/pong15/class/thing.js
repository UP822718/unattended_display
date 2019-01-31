"use strict";
var Thing = class Thing {
    constructor(id, x,y) {
        this.id = id;
        this.e = document.getElementById(id);
        this.xpos = x;
        this.ypos = y;
    }

    get elem() {
        return this.e;
    }

    get x() {
        return this.xpos;
    }

    set x(newVal) {
        this.xpos = newVal;
        return this.xpos;
    }

    get y() {
        return this.ypos;
    }

    set y(newVal) {
        this.ypos = newVal;
        return this.ypos;
    }
};
