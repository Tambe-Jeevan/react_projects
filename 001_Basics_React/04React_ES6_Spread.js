// Use the spread operator to combine the following arrays.
const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];
console.log([...arrayOne, ...arrayTwo]);

// Consider the following code:
// What will be the result of x?
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...x] = numbers; 
console.log(x); //x = [3,4,5,6]
