"use strict";
class Shape {
    constructor(ctx, originX, originY) {
        this.ctx = ctx;
        this.originX = originX;
        this.originY = originY;
    }
}
class Line extends Shape {
    constructor(ctx, originX, originY, x, y) {
        super(ctx, originX, originY);
        this.x = x;
        this.y = y;
    }
    draw() {
        this.ctx.moveTo(this.originX, this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    }
}
class Circle extends Shape {
    constructor(ctx, originX, originY, radius) {
        super(ctx, originX, originY);
        this.radius = radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
class TextShape extends Shape {
    constructor(ctx, originX, originY, text) {
        super(ctx, originX, originY);
        this.text = text;
    }
    draw() {
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.text, this.originX, this.originY);
    }
}
class MathHelper {
    static generateRandom() {
        return Math.random() * 500;
    }
}
const c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
const btnLine = document.getElementById("drawLine");
btnLine === null || btnLine === void 0 ? void 0 : btnLine.addEventListener("click", () => {
    const line = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    line.draw();
});
const btnCircle = document.getElementById("drawCircle");
btnCircle === null || btnCircle === void 0 ? void 0 : btnCircle.addEventListener("click", () => {
    const circle = new Circle(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    circle.draw();
});
const btnText = document.getElementById("drawText");
btnText === null || btnText === void 0 ? void 0 : btnText.addEventListener("click", () => {
    const text = new TextShape(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), "HP");
    text.draw();
});
