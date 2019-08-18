import { Case } from './../src/utils';
import { findNearest } from '../src/findNearest';

describe('It should find the nearest white pixel for test case', () => {
  const input: Case = {
    'nodes': 3,
    'depth': 4,
    'matrix': [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
  };
  const expected = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]];
  const inputTwo: Case = {
    'nodes': 2,
    'depth': 2,
    'matrix': [[1, 0], [0, 1]]
  };
  const expectedTwo = [[0, 1], [1, 0]];

  const inputThree: Case = {
    'nodes': 6,
    'depth': 6,
    'matrix': [[0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 1], [0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 0, 0]]
  };
  const expectedThree = [
    [2, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 2]
  ]
  const resultTwo = findNearest(inputTwo);
  const result = findNearest(input);
  const resultThree = findNearest(inputThree);
  test('It should find the nearest pixel', () => {
    expect(result).toEqual(expected);
    expect(resultTwo).toEqual(expectedTwo);
    expect(resultThree).toEqual(expectedThree);
  })
});
