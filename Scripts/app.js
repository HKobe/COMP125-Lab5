/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 *
 * StudentID: 300818557
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    /*
    Global Variables
     */

    var canvas;
    var stage;
    var helloLabel;
    var hl;
    // app entry function
    function init() {

        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every framerate
      
        main();
       
    }

    function gameLoop() {
        helloLabel.rotation -= 3; //Counter Clockwise rotation
        stage.update(); // refresh the stage container
        hl.rotation += 3;
        stage.update();
    }

    function main() {
        helloLabel = new objects.Label("Hassan Kobeissi", "40px Consolas", "#000000", 160, 160, true);
        stage.addChild(helloLabel);

        hl = new objects.Label("300847239", "40px Consolas", "#000000", 160, 160, true);
        stage.addChild(hl);

    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.mapvar stage = new createjs.Stage('myCanvas');
