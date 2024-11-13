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

let value = 2
switch (value){
    case 1:
        console.log("It is sunny");
        break;
    case 2:
        console.log("It is cloudy");
        break;
    case 3:
        console.log("It is raining");
        break;
    default:
        console.log("Couldn't read the value");
        break;
}


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
let myArray=['Esona, Avela, Zenande, Mila']
//for (let myArray of myArray) {
  //console.log(myArray)
//}
for (let index in myArray) {
  console.log(myArray[index])
}


