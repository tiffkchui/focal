const args = process.argv.slice(2);
console.log(args);

const addition = function(arr) {
  let result = 0;
  for (const num of arr) {
    result += Number(num);
  }

  return result;
};

console.log(addition(args));
