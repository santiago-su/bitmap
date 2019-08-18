# Bitmap

[![codecov](https://codecov.io/gh/santiago-su/bitmap/branch/master/graph/badge.svg)](https://codecov.io/gh/santiago-su/bitmap)
[![CircleCI](https://circleci.com/gh/santiago-su/bitmap.svg?style=svg)](https://circleci.com/gh/santiago-su/bitmap)

There is a rectangular bitmap of size `n*m`. Each pixel of the bitmap
is either white or black, but at least one is white.

The pixel in i-th line and j-th column is called the pixel `(i,j)`. The distance between two pixels `p1=(i1,j1)` and `p2=(i2,j2)` is defined as `d(p1,p2)=|i1-i2|+|j1-j2|`.

#### Challenge
- Find the distance to the nearest white pixel in the bitmap.
- Read and parse the input from standard input and write to standard output.

#### Installation
Before running this you need to have installed.
- [Node](https://nodejs.org/en/): 12.8.1
- [NPM](https://nodejs.org/en/): 6.10.2

Clone the repo
```bash
git clone https://github.com/santiago-su/bitmap.git
```
Install dependencies
```bash
npm install
```

#### Usage
1. Build project with `npm run build`.
2. Run project with `npm start`.
3. Put your input on terminal.
4. End the session with `CTRL+D`(on OS X),
5. See your output on terminal.

#### Tests
Run `npm test`

#### Solution
First of all we parse our stdin input to create the data structure that we need for implementing our algorithm. Our data structure looks like this.
```js
{
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
}
```
Then we apply our [BFS algorithm](https://en.wikipedia.org/wiki/Breadth-first_search) to each of our matrices. First we create a `n x m` size bitmap and fill it with `Infinity` values so we can later compare the distance easily between pixels.

We create a queue with our already known white pixels and iterate through the queue and fill our known black pixels with a `0` distance.

Then for each of our pixels we travel on the four adjacent directions(up, right, down, left) and if we are still inside the boundaries of our matrix and our node has not been visited before we update the distance on our result bitmap matrix and push to the queue, we continue this until the queue is empty and all of the nodes have been traversed and our result bitmap matrix is full.

We then collect our matrices and map them out to stdout with the correct string format.



#### Input
- The number of test cases `t (1≤t≤1000)` is in the first line of input, `t` test cases follow separated by an empty line.
- In the first line of each test case there is a pair of integer numbers `n, m` separated by a single space where `1<=n <=182, 1<=m<=182` which means our biggest bitmap is going to be `182x182`.
- In each of the following `n` lines of the test case exactly one zero-one word of length `m`, the description of one line of the bitmap, is written. On the j-th position in the line `(i+1)`:
`1 <= i <= n, 1 <= j <= m`
is `1` if, and only if the pixel `(i,j)` is **white**. Example:
```bash
Input:
2
3 4
0001
0011
0110

2 5
00011
10000
```

#### Output
In the i-th line for each test case, `1<=i<=n`, there should be written `m` integers `f(i,1),...,f(i,m)` separated by single spaces, where `f(i,j)` is the distance from the pixel `(i,j)` to the nearest white pixel. Example:

```bash
Output
3 2 1 0
2 1 0 0
1 0 0 1

1 2 1 0 0
0 1 2 1 1
```