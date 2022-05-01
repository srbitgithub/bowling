export class BowlingGame {

  FRAMES:number = 10

  STRIKE:string = 'X'
  SPARE:string = '/'
  MISS:string = '-'

  ROLL_VALUES:any = {
    'STRIKE': 10,
    'SPARE': 10,
    'MISS': 0
  }

  dataReceived:string = ''
  finalScore:number = 0
  rollValues:any = []
  currentRoll:number = 0

  constructor(_dataReceived?:string ){

    if (_dataReceived) {
      this.dataReceived = _dataReceived
      this.checkReceivedData()
    }
  }

  updateFinalScore(){

    const isACompleteGame = (this.rollValues.length >= this.FRAMES)
    const are12Strikes = (this.rollValues.length == 12)
    const isAGameWithoutStrikes = (this.rollValues.length == this.FRAMES)

    if (isACompleteGame){
      if (are12Strikes){
        for (let index:number = 0; index < this.FRAMES; index++){
          this.currentRoll = this.rollValues[index] + this.rollValues[index + 1] + this.rollValues[index + 2]
          this.finalScore += this.currentRoll 
        }
      }

      if (isAGameWithoutStrikes){
        for (let index:number = 0; index < this.FRAMES; index++){
          this.finalScore += this.rollValues[index] 
        }
      }

    } else {
      this.finalScore = this.rollValues[0]
    }
  }

  checkReceivedData(){

    const dataReceivedArray: string[] = this.dataReceived.split(" ")
    this.updateData(dataReceivedArray)
  }


  updateData(array:any[]){

    for (const item of array) {
      if (item === this.STRIKE || item === this.SPARE || item === this.MISS){
        this.rollValues.push(this.checkItem(item))
      } else {
        this.rollValues.push(this.convert2charsInScore(item))
      }
    }
    this.updateFinalScore();
  }
    
  checkItem(item:string):number{

    const isStrike:boolean = (item == this.STRIKE)
    const isSpare:boolean = (item == this.SPARE)
    const isMiss:boolean = (item == this.MISS)
    const isNumber:boolean = (parseInt(item) > 0 && parseInt(item) < 10)
    let value:number = 0;

    if (isStrike){
      value = this.ROLL_VALUES.STRIKE
    }
    if (isSpare){
      value = this.ROLL_VALUES.SPARE
    }
    if (isMiss){
      value = this.ROLL_VALUES.MISS
    }
    if (isNumber){
      value = parseInt(item)
    }
    return value
  }

  convert2charsInScore(twoRolls:string):number{

    const arrayTemp:number[] = []
    for (const item of twoRolls) {
      let currentScore:number  = (this.checkItem(item))
      arrayTemp.push(currentScore)
    }
    const numberToReturn:number = arrayTemp.reduce((a, b) => a + b, 0)
    return numberToReturn
  }
}
