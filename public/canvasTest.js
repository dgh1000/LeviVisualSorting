let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');
function interp_3_2(x0, x1, x2, y0, y1) {
    if (x0 == x2)
        throw "error in interp_3_2";
    return y0 + (y1 - y0) * (x1 - x0) / (x2 - x0);
}
function swap(xs, i1, i2) {
    let b = xs[i1];
    xs[i1] = xs[i2];
    xs[i2] = b;
}
function shuffle(xs) {
    let out = xs;
    let j;
    for (let i = xs.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        swap(out, i, j);
    }
    return out;
}
function main() {
    let out = [];
    for (let i = 0; i < 600; i++) {
        out.push(i);
    }
    out = shuffle(out);
    draw(out);
}
function draw(xs) {
    for (let i = 0; i < xs.length; i++) {
        let xc = interp_3_2(0, i, xs.length, 0, 600);
        let w = 600 / xs.length;
        let yc = interp_3_2(0, xs[i], xs.length, 0, -600);
        ctx.fillRect(xc, 600, w, yc);
    }
}
main();
//# sourceMappingURL=canvasTest.js.map