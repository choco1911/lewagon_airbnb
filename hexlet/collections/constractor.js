// object constractor function
//function FullName(name, lastname) {
  //this.name = name;
  //this.lastName = lastname;
  //this.getFullName = function() {
      //return this.lastName + " " + this.name;
    //};
//}

// object constracotr as variable
var FullName = function (name, lastname) {
  this.name = name;
  this.lastName = lastname;
  this.getFullName = function() {
      return this.lastName + " " + this.name;
    };
}


// item of class
var getName = new FullName('Eugene', 'Maevskiy');

var fullName = getName.getFullName();

console.log(fullName);
