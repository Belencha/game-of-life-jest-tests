// use named imports
import { Cell } from '../src/Cell';

test('Alive cell dies when number of neighbours alive is less than 2', () => {
  // Arrange
  const cell = new Cell("alive");
  cell.setNumberOfNeighboursAlive(1);
  cell.updateSituation();

  // Act
  let cellStatus = cell.getStatus();

  // Assert
  expect(cellStatus).toBe("dead");
});

test('Alive cell keeps living if number of neighbourgs alive is 2', () => {
  const cell = new Cell("alive");
  cell.setNumberOfNeighboursAlive(2);
  cell.updateSituation();
  let cellStatus = cell.getStatus();
  expect(cellStatus).toBe("alive");
});

test('Alive cell keeps living if number of neighbourgs alive is 3', () => {
  const cell = new Cell("alive");
  cell.setNumberOfNeighboursAlive(3);
  cell.updateSituation();
  let cellStatus = cell.getStatus();
  expect(cellStatus).toBe("alive");
});

test('Dead cell revives if number of neighbourgs alive is 3', () => {
  const cell = new Cell("dead");
  cell.setNumberOfNeighboursAlive(3);
  cell.updateSituation();
  let cellStatus = cell.getStatus();
  expect(cellStatus).toBe("alive");
});

test('Alive cell dies when number of neighbours alive is more than 3', () => {
  const cell = new Cell("alive");
  cell.setNumberOfNeighboursAlive(4);
  cell.updateSituation();
  let cellStatus = cell.getStatus();
  expect(cellStatus).toBe("dead");
});

test('Dead cell keeps dead if number of neighbourgs alive is different from 3', () => {
  const cell = new Cell("dead");
  cell.setNumberOfNeighboursAlive(2);
  cell.updateSituation();
  let cellStatus = cell.getStatus();
  expect(cellStatus).toBe("dead");

  cell.setNumberOfNeighboursAlive(4);
  cell.updateSituation();
  cellStatus = cell.getStatus();
  expect(cellStatus).toBe("dead");
});