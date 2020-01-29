const data = [
  { 'a': 1, 'b': 3, 'c': 10 },
  { 'a': 3, 'b': 20, 'c': 12 },
  { 'a': -1, 'b': -5, 'c': -4 },
];

let aVals = [], bVals = [], cVals = [];

data.forEach(({ a, b, c }, i) => {
  aVals[i] = a;
  bVals[i] = b;
  cVals[i] = c;
});
