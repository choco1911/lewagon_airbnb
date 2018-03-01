var person = {
  "firstName": "Eugene",
  "lastName": "Maevskiy",
// First implemention showing use of method getFullName
  //"getFullName": function() {
      //return "Not implemented yet";   //console.log(fullName); - Not implemented yet
  // }

  // "getFullName": function() {
    // return person.firstName + " " + person.lastName;  //console.log(fullName); - Eugene Maevskiy
  // }
   "getFullName": function() {
     return this.firstName + " " + this.lastName;  //console.log(fullName); - Eugene Maevskiy
  }
}

var fullName = person.getFullName();

console.log(fullName);

var person2 = person;

// new determination of person object to erase on data in it
person = {};
// return undefined undefined - it's because we're using person.firstName and person.lastName
// console.log(person2.getFullName()); // undefined undefined
// it's hardcoded to person object with is empty now
// To fix this we have to use this - keyword referncing to the current object
console.log(person2.getFullName());
