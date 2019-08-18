import { formatInput, formatOutput } from '../src/utils';

describe('Format our input', () => {
  const input = '1\n3 4\n0001\n0011\n0110';
  const expected = {
    'numOfTestCases': 1,
    'cases': [{
      'nodes': 3,
      'depth': 4,
      'matrix': [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
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
          'matrix': [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
        },
        {
          'nodes': 2,
          'depth': 2,
          'matrix': [[1, 0], [0, 1]]
        }
      ]
    };
    const formatted = formatInput(input);
    expect(formatted).toEqual(expected);
  })
})

describe('Format output with multiple cases', () => {
  const input = [
    [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]],
    [
      [2, 1, 0, 1, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 1],
      [0, 0, 0, 1, 1, 0],
      [1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 2]
    ]
  ];
  const expected = '3 2 1 0\n2 1 0 0\n1 0 0 1\n\n2 1 0 1 1 0\n1 0 1 1 0 0\n1 1 1 0 0 1\n0 0 0 1 1 0\n1 1 1 1 0 1\n1 0 1 0 1 2';
  const result = formatOutput(input)
  expect(result).toEqual(expected)
});

describe('Format output with one case', () => {
  const input = [
    [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]]
  ];
  const expected = '3 2 1 0\n2 1 0 0\n1 0 0 1';
  const result = formatOutput(input)
  expect(result).toEqual(expected)
});

describe('It should throw an error', () => {
  test('If pixels are not 1 or 0', () => {
    const input = '2\n3 4\n2221\n0011\n0110\n\n2 2\n10\n01';
    expect(() => formatInput(input)).toThrow();
  })
})