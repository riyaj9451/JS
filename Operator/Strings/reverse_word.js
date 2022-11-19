//Given a string, reverse each word in the sentence


var string= "my name is virendra verma";

// Output becomes - amrev ardneriv si eman ym
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes - my eman si ardneriv amrev
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}