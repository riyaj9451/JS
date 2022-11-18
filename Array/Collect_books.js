//Collect books from array of objects and return collection of books as an array

let friends = [{

    name: 'Virendra',
    books: ['Power of Money'],
    age: 21

}, {

    name: 'Rajesh',
    books: ['Mahabharat', 'Power of mind','Ganga'],
    age: 22

}, {

    name: 'Riyaj',
    books: ['kuraan', 'mo.sahab'],
    age:23
}]

let result =  friends.reduce((pre, curr) => {
    return[...pre, ...curr.books]

}, []);

console.log(result);