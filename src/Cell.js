export class Cell {
  constructor(status) {
    this._numberOfNeighboursAlive = 0;
    this._status = status;
  }
  setNumberOfNeighboursAlive(numberOfNeighboursAlive) {
    this._numberOfNeighboursAlive = numberOfNeighboursAlive;
  }
  checkMyNeighbourgsAlive(allCellNeighbourgs) {
    let numberOfLivingCells = 0;
    numberOfLivingCells += allCellNeighbourgs.filter(cell => cell.getStatus() == "alive").length;
    this._numberOfNeighboursAlive = numberOfLivingCells;
  }
  setStatus(status) {
    this._status = status;
  }
  getStatus() {
    return this._status;
  }
  updateSituation() {
    switch(this._status) {
      case("alive"):
        (this._numberOfNeighboursAlive == 2 || this._numberOfNeighboursAlive == 3)?
          this._status = "alive" :
          this._status = "dead";
        break;
      case("dead"): 
        (this._numberOfNeighboursAlive == 3)?
          this._status = "alive" :
          this._status = "dead";
    }
  }
}