import { findNearest } from './findNearest';
import { formatInput, formatOutput } from './utils';

process.stdin.setEncoding('utf8');

let bitmapInput: string = '';

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    bitmapInput += chunk;
  }
});

process.stdin.on('end', () => {
  const { cases } = formatInput(bitmapInput);
  const bitmaps = cases.map(bitmapCase => findNearest(bitmapCase));
  const formattedOutput = formatOutput(bitmaps);
  process.stdout.write(formattedOutput)
});
