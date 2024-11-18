// variables
// strings

// let firstname= "Lithemba"

// const firstname = "Lithemba"

// var firstname = "Lithemba"

// console.log(firstname);

// Numbers
// let number1 = 10.5

// booleans
// let value = true/ false 

// undefined
// let name

// null
// let value = null
// console.log(firstname )

// let firstname = "Lithemba"
// firstname = 3
// console.log(`my name is ${firstname}`)
// console.log("my name is "+ firstname + num)
// let myArray = ['anything',2, true, 'string']
// console.log(myArray[0])

// camelcase --> myArray (always used in 15)

// an object literal -declare (make) an obect
//let table = {
  //  material:"wood",
  //  no_of_legs:4,
  //  occupied:true,
//}
// bracket notation
//console.log(table['material']);

// dot notation
//console.log(table.material);

// destructuring
//let {material} = table//wood
//let {occupied} = table//wood
//console.log(material);

//functions
//() -> parentheses
//[] -> brackets
//{} -> braces
 //function greeting(a,b){
  //  console.log('This is a greeting'+ (a+b));
  //console.log("H1 $(fullname)")
//}
// 384 are arguments
//greeting(3,4)

//let num1 =5
//++numb1 pre increment
//numb1 post increment
//--numb1 pre decrement
//numb1-- post decrement
//console.log(numb1--);
//console.log(numb1);
//11 NOV

//converting a number to a String
//let number =number.toString

//String Method
//let myString = "something"
//show us the lenght on the string
//let lenght = myString.length;

// make text capital --> mystring.toupperCase()
// make text small letter--> mystring.toLowerCase()
//let split =myString.split('')
//console.log(split)

//let split =myString.split('')
//console.log(split)

//let value = 2
//switch (value){
  //  case 1:
    //    console.log("It is sunny");
      //  break;
    //case 2:
      //  console.log("It is cloudy");
        //break;
    //case 3:
      ///  console.log("It is raining");
        //break;
    //default:
      //  console.log("Couldn't read the value");
        //break;
//}


   //version 2 of switch statements
//let num = 5
//switch (true) {
  //  case num %2==0:
    //    console.log('Number is even');
      //  break;
    //default:
      //  console.log('Number is odd');
        //break;
//}


//tenary
//let num = 11
//console.log(num>10 ?'This is not true');

//let studentLC = true
//console.log()


//12 NOVEMBER
// for loop
//for (let x=1; x<10; x++){
  //console.log(x)
//}

//WHILE LOOP
//let w=1
//while(w<5){
//    console.log('Lithemba');
//    w++
//}

//DO WHILE LOOP
//let w=1
//do{
//  console.log('Lithemba')
//} while(w<5)

//for of loop

//let myArray=['Esona, Avela, Zenande, Mila'] 
//for (let x=0; x<Arrayl.length ; x++){
//  console.log(myArray[x])
//}
//let myArray=['Esona, Avela, Zenande, Mila']
//for (let myArray of myArray) {
  //console.log(myArray)
//}
//for (let index in myArray) {
  //console.log(myArray[index])
//}


//13 NOV 

//function breakdown
//function greet(){
  //console.log('Hi Lithemba');
  
//}
//greet()

//using funtion with arguments(without return)
//function greet(name){
 // console.log('Hi +name');
  
//}
//greet('Lithemba')

//with return

//function returned(a){
  //   return a
//}

//console.log('The number is' + returned('forty five'));

//funtion expression
//let run = function(){
  //console.log('You are running');
  
//}
//run()

//let run = function(a){
  //console.log('You are running'+' '+ a);
  
//}
//run('alone')

//Self-involving funtion peak anonymous fuction

//(function(){
  //console.log("haha I'm a ghost");
  
//})()

//arrow funtion
//let walk = ()=>{
  //  console.log('You are walking');
    
//}

//walk()

//let walk = ()=>console.log('You are walking');
  
//walk()

//let walk = ()=>{
  //return 'You are walking';

//}
  
//console.log('You are walking');
 
//SCOPING LOCAL AND GLOBAL




//15 NOV

//Objects
// let person={
//     name:"Yandile",
//     surname:"Matyityilili",
//     hairType:"bold"
// }
// console.log(person.name); //Access using Dot notation
//Or
// console.log(person['name']); //Acces using bracket notation
//Or
// let {name}= person
// console.log(name)//Accessing values in objects usingDestruction
// let person={
//     name:"Yandile",
//     surname:"Matyityilili",
//     hairType:"bold",
//     get fullname(){
//         return this.name + this.surname
//     }
// }
// person.favColour = 'Purple'
// console.log(person.fullname);
// let person2={
//     name:"Surur",
//     surname:"Samaai",
//     hairType:"Curly",
//     favSport:"Formmula",
//     get fullname(){
//         return this.name + this.surname
//     }
// }
// console.log(person2.fullname);
// Factory Functions
// function createPerson(name,surname,hairType){
//     return{
//         name:name,
//         surname:surname,
//         hairType:hairType
//     }
// }
// let person = createPerson('Yandile','Matyityilili','Bold')
// console.log(person);
// person.name ="New name"
// function CreatePerson(name,surname,hairType){
//     this.name = name;
//     this.surname = surname;
//     this.hairType = hairType;
// }
//  let person = new CreatePerson('Yandile','Matyityilili','Bold')
// CreatePerson.prototype.fullname =function(){
//     console.log('Hi' + this.name);
//  }
//  let  input = prompt('What is your name?')
//  console.log(input);
//function CreatePerson(name,surname,hairType){
  //  this.name = name;
    //this.surname = surname;
    //this.hairType = hairType;
//}
 //let person = new CreatePerson('Yandile','Matyityilili','Bold')
 //let person2 = new CreatePerson('Ethan','Brown','Straight')
 //let people = [person,person2]
 //console.log(people);
//for (let object of people){
  //  if (object.hairType == 'Straight'){
   //     console.log(object.name)
    //}
//}
//let cars =[
    //{
        //brand:'Toyota',
      //  models:[{type:'Corolla'}]
    //},
    //{
      //  brand:'BMW',
    //    models:[{}],
  //  }
//]


//ERROR Hndling

//function times(a,b){//also wotks as a string''
  //create a customcode using if statements

 //if(typeof a !='number' !! typeof b != 'number')
  //throw new Error ('Ho1\' 'up a or b is not a number');
  //return a*b
//}  

//try{
    //console.log(times(a));
    //console.log('Hi times');
    
    
//} catch(e){
    //console.log(e);
    //console.log('this is after the error');
       
//} finally{
  //('yay! I have ran and I\'m out of breath')
//}


const groupMembers = [
  { name: "Azola", favColor: "Blue", hobby: "Reading" },
  { name: "Zen", favColor: "Green", hobby: "Coding" },
  { name: "Yandile", favColor: "Red", hobby: "Gaming" }
];
console.log(groupMembers);
