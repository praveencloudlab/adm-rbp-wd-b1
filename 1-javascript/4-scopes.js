// scopes.js
console.log('-- scopes --');

//--------------------------------
// scope / execution context
//--------------------------------

/*

memory / stack-frame which contains arguments and local variables, 
to execute piece of instructions

2 phases
----------

phase-1 : creation / push 
=> all the variables declared with 'var' keyword  will get hoisted (lifted up)
   to the top of scope with default value (undefined). 

phase-2 : execution / pop 
=> instructions are executed in sequence

-----------------------------------------------------------------------

imp-note:
-----------
==> by defalt javascript runtime has one global-scope.
==> each function call also creates new-scope, which is child of in which
    scope that function is declared/defined.

-----------------------------------------------------------------------------

*/

//-------------------------------
// phase-1 : creation / push 
//--------------------------------

//var n=100;
//var n;
//console.log(n);

//console.log(v);
//var v=100;
//console.log(v);

// super global object is window
//var v=12;
//function f1(){
//  console.log(v); // undefined
//var v=13; //  f1 scope  which is parent of global scope // 
//console.log(v); //13  this keyword indicates blogal / calling context (who is calling)
//console.log(this.v); // 12  <<- blobal scope of f1 is 12 
//}
//f1();



/*
var v = 12;
function f1() { // child of global scope (scope.js)
    console.log('f1 function');
    function f2() { // child of f1 scope. 
        console.log('f2 function');
        console.log(v); 
    }
    f2(); // invokes f2 function // undefined
    var v=13; 
    f2(); // 13
}

f1(); 

*/

//var v=12;
//var v=13;

//console.log(v);

//var v=12;
//if(false){
  //  var v=13;
//}

//console.log(v);

//var v=12;

//{ // block scope
 //var v=13;
// console.log(v);
//}

//console.log(v);

//-----------------------------------------
// problems/limitations with 'var' keyword
//-----------------------------------------

//console.log(v);
//var v;
// let keyword intriduced in ES6

//console.log(v); // reference error
//let v;

//var v=12;
//var v=13;

//let v=12;
//let v=13;

//let v=12
//{
  //  let v=13;
    //console.log(v);
//}

//console.log(v);

//------------------------
//var person={
  //  name:'Praveen'
//}

//person=null;


// const is added in ES6
//const person={
  //  name:'ozvitha'
//}

//person.age=12;

//person=null;

const person={
    name:'James'
}

// by default all properties of an object is mutable

person.addr='Pune';
console.log(person);

/*

  #1 : use 'let' keyword for mutable objects
  #2 : use 'const' keyword for immutable references
  #3 : avoid 'var' keyword for better/error-free code

*/


//let p1={name:'P1'}
//let p2={namew:'P2'}
//p2=p1; // possible , because p2 is mutable
const p1={name:'P1'}
const p2={name:'P2'}
//p2=p1; // error because p2 is immutable


















