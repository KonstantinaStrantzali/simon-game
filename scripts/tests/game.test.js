//set up DOM before tests run

const {game} = require('../game')

/**
 * @jest-environment jsdom
 */

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });

 describe("game object containes correct key", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);    
    })
    test("currentMove key exist", () => {
        expect("currentMove" in game).toBe(true);
    })
    test("playerMove key exist", () => {
        expect("playerMove" in game).toBe(true);
    })
    test("choices key exist", () => {
        expect("choices" in game).toBe(true);
    })
    test("choices contain correct id", () => {
        expect(game.choices).toEqual(["button1", "button2","button3","button4"])
    })
 })