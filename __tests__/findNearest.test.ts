import { Case, testCase } from './../src/utils';
import { findNearest } from '../src/findNearest';

describe('It should find the nearest white pixel for test case', () => {
  const input: Case = {
    'nodes': 3,
    'depth': 4,
    'matrix': [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
  };
  const expected = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]];
  const result = findNearest(input);
  test('It should find the nearest pixel', () => {
    expect(result).toEqual(expected);
  })
});
