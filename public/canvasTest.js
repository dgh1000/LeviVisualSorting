let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');
function interp_3_2(x0, x1, x2, y0, y1) {
    if (x0 == x2)
        throw "error in interp_3_2";
    return y0 + (y1 - y0) * (x1 - x0) / (x2 - x0);
}
ctx.fillRect(0, 600, 6, -200);
function draw(arr) {
    ctx.clearRect(0, 0, 600, 600);
    for (let i = 0; i < arr.length; ++i) {
        let xc = interp_3_2(0, i, arr.length, 0, 600);
        let w = 600 / arr.length;
        let yc = interp_3_2(0, arr[i], 600, 0, -600);
        ctx.fillRect(xc, 600, w, yc);
    }
}
function main() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i);
    }
    draw(arr);
}
main();
console.log("foo");
//# sourceMappingURL=canvasTest.js.map