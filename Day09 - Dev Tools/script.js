const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c Some styled text', 'font-size:50px; background:red;');

// warning!
console.warn('OH NOOO!');

// Error :|
console.error('Damn!');

// Info
console.info('Hey, here is some info!');

// Testing
console.assert(1 === 2, 'Hmmm...');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    // If opened
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Human');
console.count('Human');
console.count('Human');
console.count('Animal');
console.count('Animal');
console.count('Human');
console.count('Human');
console.count('Animal');
console.count('Animal');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/instripe')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('Fetching data');
        console.table(data);
    });