export default function cleanSet(arr, startString) {
  const newSet = new Set();
  let result = '';
  if (!startString) {
    return result;
  }
  arr.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newSet.add(value.slice(startString.length));
    }
  });
  newSet.forEach((value) => {
    result += value;
    result += '-';
  });
  return result.slice(0, -1);
}
