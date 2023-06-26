console.log('--- functions ---');

/*
    two types
    ---------
    -> named functions / function declaration
    -> anonymous functions / function expression 
*/

//-------------------------------------------
// named functions / function declaration
//-------------------------------------------

function sayName() {
    //console.log('your namme is something...');
    return 'praveen';
}

console.log(sayName); // display prototype of function

var p1=sayName() // execute sayName function

console.log(sayName());

/*
imp note: 
-> every function should return a value
-> if a funcrion does not return a values, the js treat it as 'undefined'
*/


//---------------------------------------------
// anonymous functions / function expression
//----------------------------------------------

function add(n1,n2){ // named function
    return n1+n2;
}

// or with function express // anonymous functions


var sum=function(n1,n2){
    return n1+n2;
}

// IIFE / self executable function

    (function setup(){
        console.log('--- hello ...');        
    }());







