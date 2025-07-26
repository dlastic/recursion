function fibs(n) {
  if (n <= 0) return "Ivalid number of elements.";
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

function fibsRec(n) {
  if (n <= 0) return "Ivalid number of elements.";
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibsRec(n - 1);
  return [...seq, seq[seq.length - 1] + seq[seq.length - 2]];
}
