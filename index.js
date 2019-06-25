// Code your solution here
function findMatching(array, string) {return array.filter(item => item.toUpperCase() === string.toUpperCase())

}
//returns array of matching drivers regardless of case

function fuzzyMatch(array, string) {return array.filter(item => item.startsWith(string));}

function matchName(array, string) {return array.filter(object => object.name === string)};

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

// Write matchName - This function takes an array of drivers and a string as arguments.
//  In this function, each element of the drivers array is a JavaScript object that has a property of name.
//   The function should return each element whose name property matches the provided string argument.



//
// function filter(myObject){
//   var obj=Object.assign({},myObject);
//   Object.keys(obj).forEach(function(key) {
//       if(acceptedValues.indexOf(obj[key])<0) delete obj[key];
//   });
//   return obj;
// }
