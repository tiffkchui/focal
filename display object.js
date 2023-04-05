let yy = 16;
console.log(`yy before: `, yy)

function addTen(num) {
  let result = num + 10;
  console.loog(`result:`, result);
  num = num + 66;
  return result;
}

//FUNCTION CALL
const answer = addTen(yy) //take on value of yy
console.log(`answer:`, answer);
console.log(`yy after: `, yy);

//here is an object
cont myObject = {
  value: 42,
  colour: 'black'
};

function display(object) {
  console.log(`display:`, object.value);
  object.value = 'monkeyfuzz';
  return retVal;

  const response = display(myOjbect);
  console.log(`the response:`), response);
  console.log(`object after:`, object);