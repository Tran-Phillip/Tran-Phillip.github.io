import * as PIXI from "pixi.js"

function initalize_application(width: number, height: number){
    
    let Application = PIXI.Application;
    
    let loader = PIXI.Loader;
    
    let resources = PIXI.resources;
    
    let Sprite = PIXI.Sprite;
    
    let app = new Application({width: width, height: height});
    
    app.renderer.backgroundColor = 0x895044;
    document.body.appendChild(app.view);
    return app;
}

initalize_application(500, 500);