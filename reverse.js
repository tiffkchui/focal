var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return orignal.split('').reverseList().join('');
}

// new code
var input = process.argv[2];

function reverse(original) {
  return original.split("").reverse().join("");
}

if (input){
  console.log(reverse(input));
}