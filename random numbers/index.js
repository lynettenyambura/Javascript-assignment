const randomNumber = Math.floor(Math.random() * 10) + 1;

const guess= prompt(`Guess a number between 1 and 10`);

if (guess == randomNumber) {
    console.log('Good Work');
} else {
    console.log('Not matched');
}
