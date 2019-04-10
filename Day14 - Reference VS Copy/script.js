// start with strings, numbers and booleans
//Data is a copy not a reference. Example:
// let age = 100;
// let age2 = age;
// console.log(age, age2); // -> 100, 100
// age = 200;
// console.log(age, age2); // -> 200, 100



// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
//const team = players;
//console.log(team, players);

// You might think we can just do something like this:
// however what happens when we update that array?
// team[3] = 'Lux';

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an ARRAY REFERENCE, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// Now when we update it, the original one isn't changed
// one way
//const team2 = players.slice(); // -> slice returns a new array

// or create a new array and concat the old one in
//const team3 = [].concat(players); // -> concats players array into an empty array

// or use the new ES6 Spread
//const team4 = [...players]; // -> spreads players array into our new array
//const team5 = Array.from(players); // -> converts 'players' to an array and return it in a new array



// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
//const captain = person; // -> if we change some properties in one object, they will reflect in both, because it's a REFERENCE, not a copy

// how do we take a copy instead?
// const cap2 = Object.assign({}, person, { number: 99 }); // -> copy all properties and values to our target object (in this case empty {})
// console.log(cap2); 

// We will hopefully soon see the object ...spread
// const cap3 = { ...person }; // -> ES2018 object spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
