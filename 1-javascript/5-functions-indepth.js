// Depth descussion on javascript functions
//.......


//abc();
function abc() { // named function - creatin phase ..
    console.log('hello abc v1');
}

// phase -2 - execution


//var result=add(100,200) // error

//add(100,200); // error
var add = function (v1, v2) {  //anonymous functions
    console.log(v1 + v2);

}
//add(100,200); // 300

//--------------------------------------


/*

imp note:
------------
function can take zero or more params , not redtricted by argument names
*/

function f1(a, b) {
    //console.log(arguments.length);

    //console.log(arguments[0]);
    //console.log(arguments[1]);
    //console.log(arguments[2]);

    for (var i = 0; i < arguments.length; i++)
        console.log(arguments[i]);

}
//f1() // 0
//f1(10) // 1
//f1(10,20) // 2
//f1(10,20,30); // 3

//----------------------
// can we do method overloading in js? No
//----------------------

function getLunch() { // context scope / object ==> getLunch
    return 'No Lunch';
}

function getLunch(pay) {
    //......
    return 'Biryani';
}

function getLunch(pay, extra) {
    //...
    return 'Biryani ' + 'Soft-Drink';
}

//console.log(getLunch());

function getLunch() {
    if (arguments.length === 0)
        return 'No Lunch'
    if (arguments.length === 1)
        return 'Biryani'
    if (arguments.length === 2)
        return 'Biryani and Soft-Drink'
}
//console.log(getLunch()); // No Lunch
//console.log(getLunch(76)); // Biryani
//console.log(getLunch(1000,12)); // Biryani and Soft-Drink

//-------------------------------------------------------
// functions with default & rest parameters (es6)
//-------------------------------------------------------

function f2(a = 5, b = 2, ...c) { // always rest params must be last parameter
    console.log(a);
    console.log(b);
    console.log(c);


}
//f2(100,200,23,45,67,43);

//--------
// Quiz
//-------
//function f3(...r,x,y){

//}
//f3(100,200,300); // syntax error

//-----------------------------
// Function Principles
//------------------------------

/*
    - A function can be stored in a variable or value
    - A Parameter of a function can be a function

*/

function greet() {
    console.log('Good Morning!');
}

let sayHello = greet;
//sayHello();
//-------------------------------------

function greet(f) {
    console.log('--------------');
    if (f)
        console.log(f());

    else
        console.log('welcome');
    console.log('--------------');
}

//greet();// 

let g1 = function () {
    return 'Good Morning';
}
let g2 = function () {
    return 'Good Afternoon';
}
let g3 = function () {
    return 'Good Evening';
}

//greet(g1);
//greet(g2);
//greet(g3);

//------------------------------------------------------
// Higher Order Functions / Function Composition
//------------------------------------------------------

/*
 why we need?
 -------------
    to solve 2 design issues?
    => code duplicvation
    => code tight-coupling
*/

//----------------
// code duplication without hof
//-----------------

function hello() {
    console.log('hello');
    console.log('how are u?');
}

function hi() {
    console.log('hi');
    console.log('how are u?');
}
//hello()
//hi()

//--------------
// code with hof
//----------------
function greet(f) {

    return function () {
        f()
        console.log('How are you?');
    }
}

function hello() {
    console.log('hello');

}

function hi() {
    console.log('hi');
}

let greetMsg = greet(hello);

//greetMsg()
greetMsg = greet(hi);

//greetMsg()

//--------------------------------------------------
// Function Closure
//--------------------------------------------------


function teach(sub) { // parent function
    console.log('teaching ' + sub);
    let notes = sub + ' notes'
    let learn = function () { // child of teach
        console.log('learning '+notes)
    } // learn function get destroyed when teaching ends
   // learn();
    console.log('teaching ends');
    return learn;
} // teaching function destroyed here

let learnFn=teach('java script');
learnFn()
learnFn()
learnFn()
learnFn()

//------------------------
// when / where we need closure ?
//--------------------------

//  #1 : to abstract public behaviour of any module






























