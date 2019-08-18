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
