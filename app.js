//5) Scale riddle. With 8 balls  EXAM [1,2,1,1,1,1,1,1]. One of the items will be change to two. 
//   Indexes are to be chosen at random. Use comparing of weights only two times.

let balls = [1,1,1,1,1,1,1,1];
balls[Math.floor(Math.random() * 8)] = 2;
console.log("balls: " + balls);
let randomIndexOfBalls = [0,1,2,3,4,5,6,7];
function shingOfWeights(randomIndexOfBalls) {
    for (let i = randomIndexOfBalls.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomIndexOfBalls[i], randomIndexOfBalls[j]] = [randomIndexOfBalls[j], randomIndexOfBalls[i]];
    }
}
shingOfWeights(randomIndexOfBalls);
console.log("Random indexes: " + randomIndexOfBalls);
function comparingOfWeights(a, b){
    if (a>b) return 0;   
    else if (a<b) return 1;
    return (2);
}
const x = comparingOfWeights(balls[randomIndexOfBalls[0]] + balls[randomIndexOfBalls[1]] + balls[randomIndexOfBalls[2]], balls[randomIndexOfBalls[3]] + balls[randomIndexOfBalls[4]] + balls[randomIndexOfBalls[5]]);
console.log(x)
const y = comparingOfWeights(balls[randomIndexOfBalls[x * 3]] , balls[randomIndexOfBalls[x * 3 + 1]]);
console.log(y)
console.log("Ball '2' has an index: " + randomIndexOfBalls[x * 3 + y]);