import { formatInput } from '../src/utils';

describe('Format our input', () => {
  const input = '1\n3 4\n0001\n0011\n0110';
  const expected = {
    'numOfTestCases': 1,
    'cases': [{
      'nodes': 3,
      'depth': 4,
      'matrix': [[0,0,0,1],[0,0,1,1],[0,1,1,0]]
    }]
  };
  const formatted = formatInput(input);

  test('The first line of our input should define the number of tests cases', () => {
    expect(formatted.numOfTestCases).toEqual(expected.numOfTestCases);
  })
  test('The first line of every case should define our i x j bitmap length', () => {
    formatted.cases.map(x => {
      expect(x.nodes).toEqual(x.matrix.length)
      expect(x.depth).toEqual(x.matrix[0].length)
    });
  })
});

describe('Format our input with multiple cases', () => {
  test('It should format with two cases', () => {
    const input = '2\n3 4\n0001\n0011\n0110\n\n2 2\n10\n01';
    const expected = {
      'numOfTestCases': 2,
      'cases': [
        {
          'nodes': 3,
          'depth': 4,
          'matrix': [[0,0,0,1],[0,0,1,1],[0,1,1,0]]
        },
        {
          'nodes': 2,
          'depth': 2,
          'matrix': [[1,0],[0,1]]
        }
      ]
    };
    const formatted = formatInput(input);
    expect(formatted).toEqual(expected);
  })
})