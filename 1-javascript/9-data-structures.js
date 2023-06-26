/**
 * data structures
 * --------------------
 *  ==> organize memory for data to perform CRUDSS operations
 * 
 * primary data-structures
 * ------------------------
 *  => Array/List
 *  => set (ES6)
 *  => map (ES6)
 * 
 * //------------
 * // Array
 *  => Memory where we can keep all data-elements in seq qith index
 * //----------- 
 * 
 * 
 * 
 */


 let nums=[23,76,32,98,53,32]; // array

 // iterations 
 // 1. for in  // => index based iteration

for(let n in nums){
   // console.log(n);
}
console.log('---------');

for(let n in nums){
   // console.log(nums[n]);
}

// for in act differemly when idex is an object
// 2. for of // element / object based


// for of iteration ES6

for(let ele of nums){
  //  console.log(ele); // value  
}

// -----------------
// filter // works only with object array types
//-----------------

let a=nums.filter(ele=>{  
    //------
    return ele%2===0;
})

let b=nums.filter(ele=>ele%2!==0)

//----------------
// map
//----------------

let c=nums.map(ele=>ele%2===0);
let d=nums.map(ele=>ele*10);

nums.map(element=>{
   // console.log(element);
    
})

//----------------------------------
// reduce
//----------------------------------

let inp=[5,10,20,2,5,50];

inp.reduce((x,next)=>{
 //console.log(x);
 //console.log(next);

});


let e=inp.reduce((x,next)=>x+next);

//------------
// every
//------------

//let elements=[1,2,3,4,5,6,7,8,9,10];
//let f=elements.map(ele=>ele%10);

//let g=elements.every(n=>n%2===0);
//------------------
// some
//------------------

//let elements=[3,90,13];
//let f=elements.some(n=>n%2===0);

//------------
// find
//-----------

//let elements=[10,2,3,5,6,7,8,9,10];

//let result=elements.find(n=>n%2===0);
//elements.find(ele=>{
   // console.log(ele);
  //  return ele===5;
//})

// --------------
// findIndex
//--------------
//let elements=[10,2,3,5,6,7,8,9,100];
//let idx=elements.findIndex(n=>n===100);
//console.log(idx);

//-------------
//forEach
//--------------
//let elements=[10,2,3,5,6,7,8,9,100];
//elements.forEach(n=>{
  //  console.log(n);
    
//})

//-----------------------
// includes
//----------------------

let elements=[10,2,3,5,6,7,8,9,100];
let fiveExits=elements.includes(5);

//-------------------------------------------------
// set => data sturcures whoich includeas only unique values
//-----------------

//let numbers=new Set();
//numbers.add(12);
//numbers.add(122);
//numbers.add(43);
//numbers.add(2334);
//numbers.add(122);
let data=[2,65,23,98,43,43];
let myData=new Set(data);

//-------------
// Map =>  key/user-identity + data element
//---------------

let map=new Map();
map.set('praveen',{car:'I20'});

//----------------

/**
 * SUMMARY
 * ----------
 *  list/arry
 *  -> indexed output
 *  -> index based
 *  -> to hold duplicate data elements
 * 
 *  set
 * -------
 *  -> to keep unique  data values
 * 
 * map
 * ----
 *  -> keep data in memory with user identity (key)
 * 
 * 
 */











