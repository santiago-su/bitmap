process.stdin.setEncoding('utf8');

let bitmapInput: string = '';

process.stdin.on('readable', () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    bitmapInput += chunk;
  }
});

process.stdin.on('end', () => {
  process.stdout.write(bitmapInput);
});