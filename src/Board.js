import { Cell } from './Cell';

export class Board {
    constructor(cellsStatuses) {
        this._cells = [];
        for (let i = 0; i < cellsStatuses.length; i++) {
            this._cells[i] = [];
            for (let j = 0; j < cellsStatuses[i].length; j++) {
                this._cells[i][j] = new Cell(cellsStatuses[i][j]);
            }
        }
    }
    getCells() {
        return this._cells;
    }
    getNumberOfLivingCells() {
        let numberOfLivingCells = 0;
        this._cells.map(cellsRow =>
            numberOfLivingCells += cellsRow.filter(cell => cell.getStatus() == "alive").length);
        return numberOfLivingCells;
    }
    iterates() {
        this._cells.map((cellsRow, positionY) => {
            cellsRow.map((cell, positionX) => {
                let allCellNeighbourgs = [];
                /* Upper row */
                if (positionY - 1 >= 0) {
                    if (positionX - 1 >= 0) allCellNeighbourgs.push(this._cells[positionY-1][positionX-1]);
                    allCellNeighbourgs.push(this._cells[positionY-1][positionX]);
                    if (positionX + 1 < cellsRow.length) allCellNeighbourgs.push(this._cells[positionY-1][positionX+1]);
                }
                /* Current row */
                if (positionX - 1 >= 0) allCellNeighbourgs.push(this._cells[positionY][positionX-1]);
                if (positionX + 1 < cellsRow.length) allCellNeighbourgs.push(this._cells[positionY][positionX+1]);
                /* Lower row */
                if (positionY + 1 < this._cells.length) {
                    if (positionX - 1 >= 0) allCellNeighbourgs.push(this._cells[positionY+1][positionX-1]);
                    allCellNeighbourgs.push(this._cells[positionY+1][positionX]);
                    if (positionX + 1 < cellsRow.length) allCellNeighbourgs.push(this._cells[positionY+1][positionX+1]);
                }

                cell.checkMyNeighbourgsAlive(allCellNeighbourgs);
            })
        });
        this._cells.map((cellsRow) => 
            cellsRow.map((cell) => cell.updateSituation())
        );
        return this._cells;
    }
}