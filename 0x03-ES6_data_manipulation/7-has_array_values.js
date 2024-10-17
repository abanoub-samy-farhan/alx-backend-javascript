export default function hasValuesFromArray(arr, set) {
  const arr1 = new Set(arr);
  return set.isSubsetOf(arr1);
}
