"use strict"
// this keyword / function binding

/*

function binding
-------------------
    => to execute any function by an object is called function binding 

    types
    => static
    => dynamic

*/


//--------------
// static binding
//---------------


function f1() {
    console.log('hello f1');
}
//f1();

function isEven(inp) {
    console.log(this); // current context
    let out = inp % 2 === 0
    return out
}

//let out=isEven(101)
//console.log(out);

function sayName() {
    console.log(this);
    // this keyword means who (whicn context) ever object calling sayName function
    console.log('i am ' + this.name);
}

//sayName();

let p1 = {
    name: 'Praveen',
    sayName: sayName// static function binding
}

//p1.sayName()

let p2 = {
    name: 'James',
    sayName: sayName
}

//p2.sayName();

//--------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('I am ' + this.name);
    }
}

let p3 = new Person('Bucky');
let p4 = new Person('Ozvitha');

//p3.sayName();
//p4.sayName();

//------------------------------------
// cts-academy module
//------------------------------------
function doTraining(location, sub, duration) {
    console.log(this);
    console.log(`trainer ${this.name} is teaching ${sub} at ${location}  for ${duration} days`);
}
//doTraining('js',10,'chennai');

//------------------------
// way-1
//let trainer = {
  //  name: 'Praveen',
    //doTraining:doTraining // static function binding
//}

//trainer.doTraining('Js',10,'Pune');
//way -2
//let trainer={name:'Rose'}
//trainer.doTraining=doTraining; // assignment of a function to an object
//trainer.doTraining('Java',76,'US') // invocation / executuon of a function on top of object

//-------------------------------------------
// vendore module - IIHT
//--------------------------------------------
let trainer={name:'Praveen'}
Object.preventExtensions(trainer);

//----------------
// cts-class module
//----------------
//trainer.doTraining=doTraining; // error
//trainer.doTraining();
//trainer.age=76;
//trainer.name='James'; // valid


//----------------------
// 2. Dymic Binding
//----------------------

// A. Eager invocation
// 1. call
//doTraining.call(trainer,'JS',65,'Bangalore');
//let t1={name:'James'}
//doTraining.call(t1,'JS',65,'Bangalore');

// 2. apply
//doTraining.apply(trainer,['Spring',15,'Hyderabad'])

// B. Lazy invocation (on events)
// 3. bind
let newF=doTraining.bind(trainer,'Chennai'); // returns executable function
newF('js',2); 
newF('spring',15)
newF('Hibernate',10)
trainer.name='James';
newF('Mean Stack',30)

/*
      // static vs dynamic function binding

      => to keep function on object for ever ==> static
      => just function by any object ==> dynamic
      
*/





















