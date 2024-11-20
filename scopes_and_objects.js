// TODO: Create a global variable called globalCount
let globalCount = 2;

// TODO: Create a function that demonstrates local scope
function localScope() {
  let localCount = 10;
  console.log("Inside localScope:", localCount); 
}

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
  globalCount++; 
  let localCount = 20;
  
  console.log("Inside modifyVariables:", globalCount, localCount);
}

// TODO: Create a Student constructor function

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// TODO: Create several student instances
const student1 = new Student("Avela", 18, 12);
const student2 = new Student("Siya", 17, 11);
const student3 = new Student("Aluutho", 19, 13);
console.log(student1['name']);
// TODO: Create an object literal with nested properties
const person = {
  name: "Lithemba Mlenze",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Cape Town",
    Province: "Western Cape",
    zip: "7455"
  }
};