export class BowlingGame {

    STRIKE:string = 'X'
    SPARE:string = '/'
    MISS:string = '-'
    SCORE_TYPE:any = {
      'STRIKE': 'STRIKE',
      'SPARE': 'SPARE',
      'MISS': 'MISS',
      'SCORE': 'SCORE'
    }

    dataReceived:string = ''
    rollType:string = ''
    finalScore:number = 0
    data:any = []
    currentScore:any = []

    constructor(_dataReceived?:string ){

      if (_dataReceived) {
        this.dataReceived = _dataReceived
      }

      this.checkReceivedData()
    }

    checkReceivedData(){
      this.convertDataReceivedInArray()
      for (const item of this.data) {
        this.rollType = this.checkItemOfReceivedData(item)
      }
    }

    convertDataReceivedInArray(){
      const dataReceivedArray: string[] = this.dataReceived.split(" ")
      for (const item of dataReceivedArray) {
        this.data.push(item.split(''))
      }
    }
    
    checkItemOfReceivedData(item:string):string{

      let valueToReturn:string = this.SCORE_TYPE.SCORE

      const isStrike:boolean = (item == this.STRIKE)
      const isSpare:boolean = (item == this.SPARE)
      const isMiss:boolean = (item == this.MISS)

      if (isStrike) valueToReturn = this.SCORE_TYPE.STRIKE
      if (isSpare) valueToReturn = this.SCORE_TYPE.SPARE
      if (isMiss) valueToReturn = this.SCORE_TYPE.MISS

      return valueToReturn
    }
  };
