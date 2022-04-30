import { BowlingGame } from "./index"

describe("BowlingGame Score", () => {

  const bowlingGame:BowlingGame = new BowlingGame()
  
  it("returns 'BowlingGame works fine' to test BowlingGame Class", () => {
    const expected = "BowlingGame works fine";

    const result = bowlingGame.result;

    expect(result).toEqual(expected);
  })
})
