export class BowlingGame {

    dataReceived:string = '' 
    isStrike:boolean = false;

    constructor(_dataReceived?:string ){

      if (_dataReceived != null) {
        this.dataReceived = _dataReceived
      }

      if (this.dataReceived === 'X') {
        this.isStrike = true
      }

    }

    
    
    result:string = "BowlingGame works fine"
  };
