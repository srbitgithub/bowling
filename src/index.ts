export class BowlingGame {

    STRIKE:string = 'X'
    SPARE:string = '/'
    MISS:string = '-'

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
      }

      this.checkReceivedData()
    }

    checkReceivedData(){
      this.convertDataReceivedInArray()
      for (const item of this.data) {
        this.checkItemOfReceivedData(item)
        this.rollValues.push(this.currentRoll)
      }
      if (this.rollValues.length >= 10){
        for (let index:number = 0; index < 10; index++){
          this.currentRoll = this.rollValues[index]
          this.finalScore = this.finalScore + this.currentRoll + this.rollValues[index + 1] + this.rollValues[index + 2]
        }
      }
    }

    convertDataReceivedInArray(){
      const dataReceivedArray: string[] = this.dataReceived.split(" ")
      for (const item of dataReceivedArray) {
        this.data.push(item.split(''))
      }
    }
    
    checkItemOfReceivedData(item:string){

      const isStrike:boolean = (item == this.STRIKE)
      const isSpare:boolean = (item == this.SPARE)
      const isMiss:boolean = (item == this.MISS)

      if (isStrike){
        this.currentRoll = this.ROLL_VALUES.STRIKE
      }
      if (isSpare){
        this.currentRoll = this.ROLL_VALUES.SPARE
      }
      if (isMiss){
        this.currentRoll = this.ROLL_VALUES.MISS
      }
    }
  }
