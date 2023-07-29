
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const distApples = apples.map((apple) => a+apple);
    const distOranges = oranges.map((orange) => b+orange);
    const houseApples = distApples.filter((distApple) => isInsideRange(s, t, distApple));
    const houseOranges = distOranges.filter((distOrange) => isInsideRange(s, t, distOrange));
    console.log(houseApples.length);
    console.log(houseOranges.length);
}

function isInsideRange(start, end, value) {
    return value <= end && value >= start;
}