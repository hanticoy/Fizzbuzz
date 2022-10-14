let noimprime = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
        noimprime = 1;
    }
    if (i % 5 == 0) {
        console.log('Buzz');
        noimprime = 1;
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        noimprime = 1;
    }
    if (noimprime == 0){
        console.log(i);
    }
    noimprime = 0
}
