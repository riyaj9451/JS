//Write JavaScript statements that will produce the output mentioned in output format from array in input format.

/*
Input:
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
Output:
["exuberant", destruction", "present"] 
*/

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = inputWords.filter(word => word.length > 6);

console.log(longWords);