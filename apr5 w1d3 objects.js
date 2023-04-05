const voterOneName = "Sandra";
const voterOneAge = 42;
const voterOneDidVote = true;

const VoterOne = {
  name: "Sandra",
  age: 42,
  didVote: true
};

//setting valuable to be equal to this object

const propertyName = 'age;'

//DOT NOTATION
const age = voterOne.age; 
//with a '.', it's an object.
//left: object (voterOne), right: property (age)
//objects can have properties of any type: primitive types, objects, arrays
//fastest syntax, most compact


//SQUARE BRACKET NOTATION (names property explicitly)
const age2 = voterOne['age'];
//['age'] is a string literal inside square brackets


const age3 = voterOne[propertyName];
//variable that is a string value, is not a string literal 
//dereference voter age value


//EXPRESSION




// = {} (blank object literal)
//as a value, {} are objects, but are used in many settings
//array is []

const voterTwoName = "Bob";
const voterTwoAge = 4;
const voterTwoDidVote = true;

const VoterTwo = {
  name: "Bob",
  age: 4,
  didVote: true
};


const voterThreeName = "Andrew";
const voterThreeAge = 24;
const voterThreeDidVote = false;

const VoterThree = {
  name: "Andrew",
  age: 24,
  didVote: false
};

const voterFourName = "Sandra";
const voterFourAge = 24;
const voterFourDidVote = true;
const voteForBirthday = '1999-01-01';

const VoterFour = {
  name: "Andrew",
  age: 24,
  didVote: true,
  birthday: '1999-01-01';
};


//how many people voted

let numVoters = 0;
if (voterOneDidVote) {
  numVoters = numVoters +1;

}

//arrays on actions of things
//USE OBJECTS - store multiple properties under a SINGLE name
//can loop over object


const setOfVoters= [voterOne, voterTwo, voterThree, voterFour]

for (voter in setOfVoters) {
  console.log('name', voter.name);
}