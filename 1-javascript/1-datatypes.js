// datatypes

console.log('---- Data types ----');


/*

basic data types
----------------------
    1. simple/primitive ==> values
        a. undefined
        b. string
        c. number
        d. boolean
        e.bigint

    2. comple/reference ==> objects


*/

// 1. simple/primitive 
//-----------------------

// a. undefined
//-----------------
var v;  // undefined 

// b. string
//---------------

var name = 'Praveen'
var company = 'cognizant'

var dynamicString1 = 'The trainer ' + name + ' is teaching in ' + company;
var dynamicString2 =
    `
   The Trainer ${name} 
   is teaching in ${company}

`

var htmlTemplate =
    `
    <div >
        <h1 style="color:red">  Trainer  ${name} </h1>
        <h1> Working for ${company} Company </h1>
    </div>
`

var divElement = document.querySelector("#d1");
divElement.innerHTML = htmlTemplate;

var result = `the sum of 1 and 2 is ${1 + 2}`

//------------------------------------------
// c. number
//------------------------------------------

var count = 12;
var cost = 12.87;

//-------------------------------------------
// d. boolean 
//-------------------------------------------
var inStock = false;
var isEdit = true;

var a1 = 'Praveen'
var a2 = 'James'


/*
imp notes
------------
false values : falase,"", 0 , undefined, null, NaN


*/

//-------------------------------------------------------
// e. bigint
//-------------------------------------------------------

var count = 12345678910123456789101234567891012345678910n;


//---------------------------------------
// Complex / refernce types / objects
//---------------------------------------

/*
What is an object?

    => data/info/attributes/properties => state
    => functions/methods/work/operations => behaviour 
    => address/location/reference => identity

    obj ==> s b i
    
    e.g

        trainer obj

            -> state (name, age, skills)
            -> behaviour (teach)
            -> identity (where am i)

     class : description / blue print / template of similar objects
     class ==> instances

*/

//------------------------------
// class / constructor ( till ES5)
//-------------------------------


/*

How to create Object from a class?
2 steps
-----------
step-1 : dynamic memory allocation: ==> 'new keyword'
step-2 : initialize obj's properties : ==> constructor

syntax:
---------
var-ref =new Constructor()

*/


function Person(name, age) { // class in ES5
    this.name = name;
    this.age = age;
}


Person.prototype.sayName = function () {
    console.log('name is ' + this.name);
}

Person.prototype.sayAge = function () {
    console.log('i am ' + this.age + ' years old');
}


/*
var p1 = new Person('Praveen', 36);
p1.sayName(); // display name of person
p1.sayAge(); // displays age of person

var p2 = new Person('James', 87);
p2.sayName();
p2.sayAge();

*/
// -------------------------------
// class / constructor (from ES6)
//---------------------------------

class NewPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('name is ' + this.name);
    }

    sayAge(){
        console.log('i am ' + this.age + ' years old');
    }
}

var p1=new NewPerson('Ozvitha',32);
p1.sayName();
p1.sayAge();






