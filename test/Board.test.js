import { Board } from '../src/Board';

test("Board gets initialized with some living cells so the game can start", () => {
    const board = new Board([["dead", "dead"], ["alive", "alive"]]);
    expect(board.getNumberOfLivingCells()).toBeGreaterThan(1);
});

test("Board 2x2 is able to correctly iterate once", () => {
    let input = [["dead", "dead"], ["alive", "alive"]];
    let output = [["dead", "dead"], ["dead", "dead"]];
    let boardInput = new Board(input);
    let boardOutput = new Board(output);

    /*
     * I am only comparing states because
     * if I compare the entire boards then the number of neighbours alive
     * is not going to be equal, so the assert will be false
     */
    let inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    let outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);

    input = [["alive", "dead"], ["alive", "alive"]];
    output = [["alive", "alive"], ["alive", "alive"]];
    boardInput = new Board(input);
    boardOutput = new Board(output);
    inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);

});

test("Board 3x3 is able to correctly iterate once", () => {
    let input = [["dead", "dead", "alive"], ["alive", "alive", "alive"]];
    let output = [["dead", "dead", "alive"], ["dead", "alive", "alive"]];
    let boardInput = new Board(input);
    let boardOutput = new Board(output);
    let inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    let outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);

    input = [["alive", "dead", "alive"], ["alive", "alive", "dead"], ["dead", "dead", "dead"]];
    output = [["alive", "dead", "dead"], ["alive", "alive", "dead"], ["dead", "dead", "dead"]];
    boardInput = new Board(input);
    boardOutput = new Board(output);
    inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);

    input = [["alive", "alive", "alive"], ["alive", "dead", "alive"], ["alive", "alive", "alive"]];
    output = [["alive", "dead", "alive"], ["dead", "dead", "dead"], ["alive", "dead", "alive"]];
    boardInput = new Board(input);
    boardOutput = new Board(output);
    inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);

});

test("Board 6x6 is able to correctly iterate once", () => {
    const INPUT = [["dead", "dead", "alive", "dead", "alive", "dead"], ["dead", "alive", "alive", "dead", "alive", "alive"], ["dead", "dead", "alive", "dead", "alive", "dead"], ["dead", "dead", "alive", "alive", "alive", "dead"], ["dead", "dead", "alive", "dead", "alive", "dead"], ["dead", "alive", "alive", "dead", "alive", "dead"]];
    const OUTPUT = [["dead", "alive", "alive", "dead", "alive", "alive"], ["dead", "alive", "alive", "dead", "alive", "alive"], ["dead", "dead", "dead", "dead", "dead", "dead"], ["dead", "alive", "alive", "dead", "alive", "alive"], ["dead", "dead", "dead", "dead", "alive", "alive"], ["dead", "alive", "alive", "dead", "dead", "dead"]];
    const boardInput = new Board(INPUT);
    const boardOutput = new Board(OUTPUT);
    const inputStates = boardInput.iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    const outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);
});

test("Board 3x3 is able to correctly iterate twice", () => {
    let input = [["alive", "dead", "alive"], ["alive", "alive", "dead"], ["dead", "dead", "dead"]];
    let output = [["alive", "alive", "dead"], ["alive", "alive", "dead"], ["dead", "dead", "dead"]];
    let boardInput = new Board(input);
    let boardOutput = new Board(output);
    let inputStates = boardInput.iterates().iterates().getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    let outputStates = boardOutput.getCells().map(cellsRow => cellsRow.map(cell => cell.getStatus()));
    expect(inputStates).toEqual(outputStates);
})