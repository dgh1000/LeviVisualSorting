function interp_3_2(x0, x1, x2, y0, y1) {
    if (x0 == x2)
        throw "error in interp_3_2";
    return y0 + (y1 - y0) * (x1 - x0) / (x2 - x0);
}
let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');
let p = { n: 10, value: 15 };
let x0 = 100.0;
let x1 = 200.0;
let x = interp_3_2(0, p.n, 20, x0, x1);
let y = interp_3_2(-30, p.value, 30, 600, 300);
ctx.fillRect(x, y, 10, 600 - y);
//# sourceMappingURL=canvasTest.js.map