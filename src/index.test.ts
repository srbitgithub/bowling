import { BowlingGame } from "./index"

describe("BowlingGame Score", () => {

  it('returns "BowlingGame works fine" to test BowlingGame Class', () => {
    const bowlingGame:BowlingGame = new BowlingGame()

    const expected = "BowlingGame works fine";

    const result = bowlingGame.result;

    expect(result).toEqual(expected);
  })

  it('returns true if receive an X', () => {
    const bowlingGame:BowlingGame = new BowlingGame('X')

    const expected = true;

    const result = bowlingGame.isStrike;

    expect(result).toEqual(expected);
  })

  it('returns true if receive an /', () => {
    const bowlingGame:BowlingGame = new BowlingGame('/')

    const expected = true;

    const result = bowlingGame.isSpare;

    expect(result).toEqual(expected);
  })


})
