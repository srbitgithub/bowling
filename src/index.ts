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
      for (let index:number = 0; index < this.ROLLS; index++){
        this.currentRoll = this.rollValues[index] + this.rollValues[index + 1] + this.rollValues[index + 2]
        this.finalScore += this.currentRoll 
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
        this.updateFinalScore();
      } 
    }
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
}
