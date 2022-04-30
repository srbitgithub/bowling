export class BowlingGame {

    dataReceived:string = '' 
    isStrike:boolean = false;
    isSpare:boolean = false;
    isMiss:boolean = false;

    constructor(_dataReceived?:string ){

      if (_dataReceived != null) {
        this.dataReceived = _dataReceived
      }

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
