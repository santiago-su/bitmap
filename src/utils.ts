export const formatInput = (input:string) => {
  const lines = input.trim().split('\n');
  const numOfTestCases = Number(lines[0]);
  const casesWithoutNumOfTestCases = lines.slice(1).join('\n').split('\n\n');
  const cases = casesWithoutNumOfTestCases.map(y => {
    const [nodes, ,depth] = y.split('\n')[0];
    const matrix = y.split('\n').slice(1).map(val =>
      val.split('').map(y => Number(y)));
    return {
      nodes: Number(nodes),
      depth: Number(depth),
      matrix
    }
  });

  return {
    numOfTestCases,
    cases
  };
};
