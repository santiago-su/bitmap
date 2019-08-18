export interface Case {
  nodes: number,
  depth: number,
  matrix: number[][]
}

export interface testCase {
  numOfTestCases: number,
  cases: Case[]
}

/**
 * Formatting input from STDIN
 * @param input - String that has:
 * The number of test cases t (1≤t≤1000) is in the first line of input,
 * then t test cases follow separated by an empty line.
 * In the first line of each test case there is a pair of integer numbers n, m
 * separated by a single space. 1<=n <=182, 1<=m<=182.
 * @returns Object that has:
 * - numOftestCases: number of total test cases
 * - cases: Array of objects that specify each test case
 */

export const formatInput = (input: string): testCase => {
  const lines = input.trim().split('\n');
  const numOfTestCases = Number(lines[0]);
  const casesWithoutNumOfTestCases = lines.slice(1).join('\n').split('\n\n');
  const cases = casesWithoutNumOfTestCases.map(y => {
    const [nodes, , depth] = y.split('\n')[0];
    const matrix = y.split('\n').slice(1).map(val =>
      val.split('').map(y => Number(y)));
    return {
      nodes: Number(nodes),
      depth: Number(depth),
      matrix
    }
  });
  return { numOfTestCases, cases };
};

/**
 * Formatting output from array of bitmaps
 * @param input - Array of bitmap matrices.
 * @returns string - In the i-th line for each test case
 * 1<=i<=n, there should be written m integers f(i,1),...,f(i,m)
 * separated by single spaces, where f(i,j) is the distance
 * from the pixel (i,j) to the nearest white pixel.
 */
export const formatOutput = (input: number[][][]): string =>
  input.map(y => y.map(z => z.join(' ')).join('\n')).join('\n\n');