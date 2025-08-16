/*What is a correct statement of the array map() method?
The map() method is used to hold map coordinates
The map() method is used to generate maps
The map() method is used to run a function on every item in an array  //answer

Complete the array method that will allow you to run a function on each item in the array and return a new array. */
let item = [1,2,3,4,5]
// const myList = myArray.map((item) => <p>{item}</p>)

// In React, map() can be used to generate lists.
// True //answer
// False


/*Consider this Array:
What is a correct syntax to put 'Mike' as a value to x?*/
const family = ['Jane', 'John', 'Mike'];
const [x] = family;   //Jane
const [,a] = family;  //John
const [,,b] = family; //Mike



const person = {
  name: 'Jesse',
  age: 30, 
  address: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person)

function displayMessage({ address: { state }}) {  //destucturing using function parameter
  const message = 'I live in ' + state + '.';
  console.log(message);  //I live in Texas.
}
