import { findNearest } from './findNearest';
import { formatInput, formatOutput } from './utils';

process.stdin.setEncoding('utf8');

let bitmapInput: string = '';

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    if (chunk === 'end\n') {
      process.stdin.emit('end');
    }
    bitmapInput += chunk;
  }
});

process.stdin.on('end', () => {
  const { cases, numOfTestCases } = formatInput(bitmapInput);
  if (numOfTestCases !== cases.length) {
    throw new Error('Did not provide correct number of cases');
  }
  const bitmaps = cases.map(bitmapCase => findNearest(bitmapCase));
  const formattedOutput = formatOutput(bitmaps);
  process.stdout.write(formattedOutput)
});
