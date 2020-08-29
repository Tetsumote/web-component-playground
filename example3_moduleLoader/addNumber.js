export default class AddNumber {
    constructor() {
        document.querySelector('p').innerText = randomNumberGenerator();
    }
}

function randomNumberGenerator() {
    return Math.random();
}