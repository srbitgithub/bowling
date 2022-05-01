export class BowlingGame {

  STRIKE:string = 'X'
  SPARE:string = '/'
  MISS:string = '-'

  ROLLS:number = 10

  SCORE_TYPE:any = {
    'NULL':  'NULL',
    'STRIKE': 'STRIKE',
    'SPARE': 'SPARE',
    'MISS': 'MISS',
    'SCORE': 'SCORE'
  }

  ROLL_VALUES:any = {
    'STRIKE': 10,
    'SPARE': 10,
    'MISS': 0
  }

  dataReceived:string = ''
  rollType:string = ''
  finalScore:number = 0
  data:any = []
  rollValues:any = []
  currentRoll:number = 0


  constructor(_dataReceived?:string ){

    if (_dataReceived) {
      this.dataReceived = _dataReceived
      this.checkReceivedData()
    }

  }

  updateFinalScore(){
    if (this.rollValues.length >= this.ROLLS){
      this.finalScore = 0
      if (this.rollValues.length == 12){
        for (let index:number = 0; index < this.ROLLS; index++){
          this.currentRoll = this.rollValues[index] + this.rollValues[index + 1] + this.rollValues[index + 2]
          this.finalScore += this.currentRoll 
        }
      }
      if (this.rollValues.length == this.ROLLS){
        for (let index:number = 0; index < this.ROLLS; index++){
          this.currentRoll = this.rollValues[index][0] + this.rollValues[index][1]
          this.finalScore += this.currentRoll 
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
      if (item.length == 1){
        this.rollValues.push(this.checkItem(item))
      } else {
        const newItem: any[] = []
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

  convert2charsInScore(twoRolls:string):number[]{
    const arrayTemp:number[] = []
    const firstRoll:number  = this.checkItem(twoRolls.substring(0,1))
    const secondRoll:number = this.checkItem(twoRolls.substring(1))
    arrayTemp.push(firstRoll,secondRoll)
    return arrayTemp
  }
}
