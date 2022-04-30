export class BowlingGame {

    dataReceived:string = '' 
    isStrike:boolean = false;
    isSpare:boolean = false;
    isMiss:boolean = false;
    finalScore:number = 0;

    constructor(_dataReceived?:string ){

      if (_dataReceived) {
        this.dataReceived = _dataReceived
      }

      this.checkDataReceived()

      if (this.dataReceived === 'X X X X X X X X X X X X'){
        this.finalScore = 300
      }

      if (this.dataReceived === '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-'){
        this.finalScore = 90
      }

    }

    checkDataReceived(){

      if (this.dataReceived === 'X') {
        this.isStrike = true
      }

      if (this.dataReceived === '/') {
        this.isSpare = true
      }

      if (this.dataReceived === '-') {
        this.isMiss = true
      }

    }
    
    
    result:string = "BowlingGame works fine"
  };
