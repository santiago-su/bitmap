import {
  Case
} from './utils';

/**
 * findNearest function implementing a Breadth First Search algorithm.
 *
 * @param testCase - Test case for nearest pixel Case
 * @returns bitmap - Matrix with the distances to nearest pixels
 */

export const findNearest = (testCase: Case) => {
  const {
    nodes,
    depth,
    matrix
  } = testCase;

  /**
   * Creates bitmap matrix and fills the values with infinity.
   */
  const bitmapWithDistance: number[][] = Array(testCase.nodes).fill(undefined).map(() =>
    Array(testCase.depth).fill(Infinity));

  const queue: {
    location: number[]; distance: number
  }[] = [];

  /**
   * Creates a queue of known white pixels
   */
  matrix.map((row: number[], rowIdx: number) =>
    row.forEach((px: number, colIdx: number) => {
      if (px === 1) {
        queue.push({
          location: [rowIdx, colIdx],
          distance: 0
        });
      };
    })
  );

  /**
   * Checks if our nodes are inside matrix boundaries
   *
   * @param a - Node index
   * @param b - Depth index
   */
  const isInsideMatrix = (a: number, b: number): boolean =>
    a >= 0 && a < nodes && b >= 0 && b < depth;

  /**
   * Iterates through our queue and calculates distance between black/white pixels
   */
  while (queue.length > 0 && queue[0]) {
    const currentNode = queue[0];
    const {
      location: [currNode, currDepth],
      distance
    } = currentNode;

    // Visit black pixel nodes and set distance to 0
    if (distance < bitmapWithDistance[currNode][currDepth]) {
      bitmapWithDistance[currNode][currDepth] = distance;
    }

    // Up -> Right -> Down -> Left
    const neighbors = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1]
    ];

    /**
     * Travels on all four directions from each node and
     * if the nodes are inside our matrix boundaries
     * and are not visited we push them to the queue and update
     * the distance
     */
    for (let i = 0; i < neighbors.length; i++) {
      const nextNode = neighbors[i][0] + currNode;
      const nextDepth = neighbors[i][1] + currDepth;

      if (isInsideMatrix(nextNode, nextDepth) && bitmapWithDistance[nextNode][nextDepth] === Infinity) {
        bitmapWithDistance[nextNode][nextDepth] = distance + 1;
        queue.push({
          location: [nextNode, nextDepth],
          distance: distance + 1
        });
      }
    }
    queue.shift();
  }
  return bitmapWithDistance;
};
