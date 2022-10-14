let noimprime = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i + ':Fizz');
        noimprime = 1;
    }
    if (i % 5 == 0) {
        console.log(i + ':Buzz');
        noimprime = 1;
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + ':FizzBuzz');
        noimprime = 1;
    }
    if (noimprime == 0){
        console.log(i + ':i');
    }
    noimprime = 0
}
