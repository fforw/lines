import domready from "domready"
// noinspection ES6UnusedImports
import STYLE from "./style.css"
import SimplexNoise from "simplex-noise"
import Gradient from "./Gradient";
import Color from "./Color";


const PHI = (1 + Math.sqrt(5)) / 2;
const TAU = Math.PI * 2;
const DEG2RAD_FACTOR = TAU / 360;

const HORIZON_FACTOR = 0.5; // 1 - 1 / PHI;

const config = {
    width: 0,
    height: 0,
    horizonLine: 0
};

let ctx, canvas;

const noise = new SimplexNoise();

const LINE_STEP = 7;
const CURVE_STEP = 256;

const MAX_DIST = 160;



function createOffset(x, y, angleScale, distScale)
{
    const angle =  ( 1 + noise.noise2D( x * angleScale, y * angleScale)) * TAU / 2;
    const distance = ( 1 + noise.noise2D( x * distScale, y * distScale)) * MAX_DIST / 2;

    return {
        x: Math.cos(angle) * distance,
        y : Math.sin(angle) * distance
    };
}


function draw(height, width, id, angleScale, distScale, gradient, opacity)
{
    const numCols = Math.ceil((height + MAX_DIST * 2)/LINE_STEP);

    let pos = 0;
    let step = 1 / numCols;
    for (let y = -MAX_DIST; y < height + MAX_DIST; y += LINE_STEP)
    {
        ctx.strokeStyle = gradient.colorAt(pos).toRGBA(opacity);
        pos += step;

        ctx.beginPath();

        let lastOff = createOffset(width + MAX_DIST * 1.5, y + id, angleScale, distScale);
        for (let x = width + MAX_DIST - CURVE_STEP; x >= -MAX_DIST * 1.5; x -= CURVE_STEP)
        {
            const off = createOffset(x, y + id, angleScale, distScale);

            const x_mid = x + (off.x + lastOff.x + CURVE_STEP) / 2;
            const y_mid = y + (off.y + lastOff.y) / 2;
            const cp_x1 = (x_mid + x + lastOff.x + CURVE_STEP) / 2;
            const cp_x2 = (x_mid + x + off.x) / 2;

            ctx.quadraticCurveTo(cp_x1, y + lastOff.y, x_mid, y_mid);
            ctx.quadraticCurveTo(cp_x2, y + off.y, x + off.x, y + off.y);

            lastOff = off;
        }

        ctx.stroke();
    }
}


const hueVariation = [
    -1/3,
    0.5,
    1/3
];


function randomGradient()
{
    const h0 = Math.random();
    const l0 = 0.5;
    const l1 = 0.5;

    const h1 = h0 + hueVariation[(Math.random() * hueVariation.length) | 0];

    return new Gradient([
            Color.fromHSL(h0, 0.9, l0),
            Color.fromHSL(h1, 0.9, l1),
        ],
        256
    );
}


domready(
    () => {
        canvas = document.getElementById("screen");
        ctx = canvas.getContext("2d");

        const width = (window.innerWidth) | 0;
        const height = (window.innerHeight) | 0;

        config.width = width;
        config.height = height;

        canvas.width = width;
        canvas.height = height;

        ctx.fillStyle = "#000";
        ctx.fillRect(0,0, width, height);
        ctx.lineWidth = 2;
        const gradient = randomGradient();

        draw(height, width, 0, 0.0011, 0.0013, gradient, 0.5);
        // ctx.strokeStyle = `hsla(${hue - 120},100%,60%,0.5)`;
        // draw(height, width, 600, 0.0003, 0.0044);
    }


);
