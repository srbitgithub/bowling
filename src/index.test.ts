import { BowlingGame } from "./index"

describe("BowlingGame Score", () => {

  it('Sets the finalScore variable to 0 when the class is called', () => {
    const bowlingGame:BowlingGame = new BowlingGame()

    const expected = 0;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  it('Sets the rollType variable to STRIKE if the constructor received a strike "X"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('X')

    const expected = 10;

    const result = bowlingGame.currentRoll;

    expect(result).toEqual(expected);
  })

  it('Sets the rollType variable to SPARE if the constructor received a spare "/"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('/')

    const expected = 10;

    const result = bowlingGame.currentRoll;

    expect(result).toEqual(expected);
  })

  it('Sets the rollType variable to MISS if the constructor received a miss "-"', () => {
    const bowlingGame:BowlingGame = new BowlingGame('-')

    const expected = 0;

    const result = bowlingGame.currentRoll;

    expect(result).toEqual(expected);
  })

  it('returns max score when receiving 12 strikes', () => {
    const bowlingGame:BowlingGame = new BowlingGame('X X X X X X X X X X X X')

    const expected = 300;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })

  xit('calculates 10 pairs of number + miss', () => {
    const bowlingGame:BowlingGame = new BowlingGame('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')

    const expected = 90;

    const result = bowlingGame.finalScore;

    expect(result).toEqual(expected);
  })
})
