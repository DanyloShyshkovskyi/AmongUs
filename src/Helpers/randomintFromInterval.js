export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min) + min)
}