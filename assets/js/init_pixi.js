"use strict";
exports.__esModule = true;
var PIXI = require("pixi.js");
function initalize_application(width, height) {
    var Application = PIXI.Application;
    var loader = PIXI.Loader;
    var resources = PIXI.resources;
    var Sprite = PIXI.Sprite;
    var app = new Application({ width: width, height: height });
    app.renderer.backgroundColor = 0x895044;
    document.body.appendChild(app.view);
    return app;
}
initalize_application(500, 500);
