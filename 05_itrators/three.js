// for of loop itrate the obj
// Simplifies iteration: The for...of loop simplifies iteration over arrays or other iterable objects without needing to deal with the index manually.
// Works with iterable objects: It works on data structures like arrays, strings, maps, sets, and more.
// Does not work with objects: The for...of loop cannot iterate directly over ordinary objects. If you want to iterate over an object's keys or values, you would need to use Object.keys(), Object.values(), or Object.entries() first.
// for (const element of iterable) {
//     // Code to be executed for each element
//   }
//   element: The variable that holds the current value during each iteration.
//   iterable: The collection (like an array, string, map, etc.) that you want to loop over.
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }