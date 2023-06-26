"use strict"
// arrow functions

// -------------------
// Function Expression
//---------------------

//let getPrice=function(){
//  return 100+200;
//}

// or
//let getPrice=() =>{ // => indicate function
//  return 100+200;
//}

// ------------------------------
//let getPrice = (count) => {
//  return (100 + 200) * count
//} 

//  or

//let getPrice=count=>{
//  return (100 + 200) * count
//}

//------------------------
//let getPrice=(count,tax)=>{
//  return count*(100+200) +tax;
//}


// or
let getPrice = (count, tax) => count * (100 + 200) + tax;

//let sum=()=>100+200;
let sum = (a, b) => a + b;

// -----------------------
// advance level functions in js
//-------------------------

/*
function doTeach(){

console.log('teachong js');

  function doLeanJS(){
    console.log('learnig js');
  }

  function doLeanSpring(){
    console.log('learning spring');
  }

  //doLeanJS(); // doLearnJS context is destroyed

  console.log('teaching ends here');

  return doLeanJS;
  
}

let learnJS=doTeach();
learnJS();
learnJS();
learnJS();

*/

/*

Note:
-> in case of more than one value/object/fuction returning from parent function, in this case 
  return type should be json object / json array of objects

*/

/*
function doTeach(){

  console.log('teachong js');
  
    function doLeanJS(){
      console.log('learnig js');
    }
  
    function doLeanSpring(){
      console.log('learning spring');
    }
  
  
    console.log('teaching ends here');
  
    return {
              js:doLeanJS,
              spring:doLeanSpring
          }
    
  }

  let learn=doTeach();
  learn.js();
  learn.js();

  learn.spring();
  learn.spring();

  */


/*
let doTeach = () => {
  let learnJs = function () {
    console.log('-- v1  learnig js');

  }
  let leanSpring = function () {
    console.log('v1   learning spring');

  }
  return {
    js: learnJs,
    spring: leanSpring
  }
}

let learn = doTeach();

learn.js();
learn.js();

learn.spring();
learn.spring();

*/




/*
let doTeach = (duration) => {


  let learnJs = () => {
    console.log('v2: learning js for '+duration+' days');
  }
  let leanSpring = () => {
    console.log('v2: learning js '+duration+' days');
  }

  return {
    js: learnJs,
    spring: leanSpring
  }
}


let learn = doTeach(12);

learn.js();
learn.js();

learn.spring();
learn.spring();

*/



let doTeach = (sub, duration) => {


  let doLearn = () => {
    console.log(`v3: learning ${sub} for ${duration} days`);
  }


  return doLearn;
}

//let js = doTeach('js',10);
//js();
//js();

//let spring=doTeach('spring',20);
//spring();
//spring();

//--------------------------------

let numbers = [43, 76, 12, 87, 54, 34];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//----------

console.log('-------------');


numbers.map(ele => {
  console.log(ele);
})

