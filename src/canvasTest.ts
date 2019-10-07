let canv = document.getElementById('canv') as HTMLCanvasElement;
let ctx = canv.getContext('2d');

function interp_3_2(x0: number, x1: number, x2: number, y0: number, y1: number) {
    if (x0 == x2)
        throw "error in interp_3_2";
    return y0 + (y1 - y0)*(x1 - x0)/(x2 - x0);
}

function swap(xs: number[], i1: number, i2: number): void {
    let b = xs[i1];
    xs[i1] = xs[i2];
    xs[i2] = b;
}

function shuffle(xs: number[]): number[] {
    let out: number[] = xs;
    let j: number;
    for(let i = xs.length - 1; i > 0; i--) {
        j = Math.floor(Math.random()*i);
        swap(out, i, j);
    }
    return out;
}

function bubblePass(xs: number[]): void {
    for(let i = 0; i < xs.length - 1; i++) {
        if (xs[i] > xs[i + 1]) {
            swap(xs, i, i + 1);
        }
    }
    draw(xs);
    requestAnimationFrame(() => bubblePass(xs));
}

// func01
//
// requestAimationFrame(func01);



function main(): void {
    let out: number[] = []
    for(let i = 0; i < 600; i ++) {
        out.push(Math.floor(Math.random()*100));
    }
    bubblePass(out);
}

function draw(xs: number[]): void {
    for(let i = 0; i < xs.length; i++) {
        let xc = interp_3_2(0, i, xs.length, 0, 600)
        let w = 600/xs.length
        let yc = interp_3_2(0, xs[i], xs.length, 0, -600)
        ctx.fillRect(xc, 600, w, yc);
    }
}

main();



