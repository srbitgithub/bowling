import { BowlingGame } from "./index"

describe("BowlingGame Score", () => {

  it('Sets the finalScore variable to 0 when the class is called', () => {
    const bowlingGame:BowlingGame = new BowlingGame()

    const expected = 0;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('Sets the finalScore variable to 10 if the constructor received a strike "X"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('X')

    const expected = 10;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('Sets the finalScore varable to 10 if the constructor received a spare "/"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('/')

    const expected = 10;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('Sets the finalScore variable to zero if the constructor received a miss "-"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('-')

    const expected = 0;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('returns max score when receiving 12 strikes', () => {
    const bowlingGame:BowlingGame = new BowlingGame('X X X X X X X X X X X X')

    const expected = 300;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('calculates 10 pairs of number + miss', () => {
    const bowlingGame:BowlingGame = new BowlingGame('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')

    const expected = 90;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('calculates 10 pairs of number + number', () => {
    const bowlingGame:BowlingGame = new BowlingGame('11 11 11 11 11 11 11 11 11 11')

    const expected = 20;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('calculates a game with 10 spares', () => {
    const bowlingGame:BowlingGame = new BowlingGame('/ / / / / / / / / /')

    const expected = 100;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('calculates a game when roll #10 is a strike', () => {
    const bowlingGame:BowlingGame = new BowlingGame('11 11 11 11 11 11 11 11 11 X 11')

    const expected = 30;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

})
