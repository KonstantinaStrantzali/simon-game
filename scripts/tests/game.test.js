//set up DOM before tests run

const {game, newGame} = require('../game')

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
    test("currentGame key exist", () => {
        expect("currentGame" in game).toBe(true);
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

 describe("newGame reset values", () => {
    test("newGame set score to zero", () => {
        expect(game.score).toEqual(0)
    })
    test("newGame set currentMove to empty", () => {
        expect(game.currentGame.length).toEqual(0)
    })
    test("newGame set score to empty", () => {
        expect(game.playerMove.length).toEqual(0)
    })

 })