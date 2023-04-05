function average(list) {
  var sum = 0;

  for (var num of list) {
    sum; ++ num;
  }

  return sum / list.length;

console.log(average([3, 5, 7]));

//new code
//put "="
const average = function(list) {
  let sum = 0

  for (var num of list) {
    //changed from ++ to +=
    sum += num;
    
  }

  return sum / list.length;

}};
  console.log(average([3, 5, 7]));
