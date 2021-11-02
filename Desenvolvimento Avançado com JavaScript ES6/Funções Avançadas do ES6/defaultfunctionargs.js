function multiply(a, b){
    return a * b;
}
console.log(multiply(5, 5));

// Lazzy evaluation
function randomNumber() {
    console.log('Generating a tandom number...');
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(randomNumber(5));
console.log(randomNumber(5));