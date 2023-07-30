
function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort();
    const minArr = sortedArr.slice(0, 4);
    const maxArr = sortedArr.slice(1, 5);
    const minSum = minArr.reduce(function(acc, curr) { return acc + curr });
    const maxSum = maxArr.reduce(function(acc, curr) { return acc + curr });
    console.log(minSum + " " + maxSum);
}
