// It is recommended to avoid using string objects. Using string objects slows down the program.

// declared variable

const text1 = 'virendra';
const text2 = 'verma';
const text3 = '    JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1);

//converting text to Uppercase
const result2= text1.toUpperCase();
console.log(result2);


//removing whitespace from the string
const result3= text3.trim();
console.log(result3);

//converting the string to array
const result4= text1.split();
console.log(result4);



//slicing the string
const result5= text1.slice(2,6);
console.log(result5);


// includes() string
const result6= text1.includes();
console.log(result6);

//search() the string
const result7= text1.search(1,2);
console.log(result7);