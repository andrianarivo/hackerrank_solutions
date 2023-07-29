
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    const gap = Math.abs(x2 - x1);
    const vgap= Math.abs(v1 - v2);
    if((vgap > gap) || (gap % vgap) !== 0) {
        return "NO";
    }
    const numJumps = gap / vgap;
    const y1 = (v1 * numJumps) + x1;
    const y2 = (v2 * numJumps) + x2;
    return y1 === y2 ? "YES" : "NO";
}
