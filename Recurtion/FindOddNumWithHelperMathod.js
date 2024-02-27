function findOdd(arr) {
  let result = [];
  function helper(arrs) {
    if (arrs.length == 0) return;
    if (arrs[0] % 2 != 0) result.push(arrs[0]);
    helper(arrs.slice(1));
  }
  helper(arr);
  return result;
}
console.log(findOdd([1, 2, 3, 4, 5, 6, 7]));
