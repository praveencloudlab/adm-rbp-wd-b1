//---------------
// spread operator (es6)
//---------------

function display(n1,n2,n3,n4){  // formal argumnets
    console.log(n1);
    console.log(n2);
    console.log(n3);
    //console.log(n4);
}

//let x=10;
//let y=20;
//let z=30;

//display(x,y,z); // actual arguments

let numbers=[10,20,30,40];
//display(numbers);
//display(numbers[0],numbers[1],numbers[2])
//display(...numbers) // spreading 

//----------
// ex1
//----------
//let arr1=[1,2,3];
//let arr2=[7,8,9];

//let arr3=[]; 
//arr3.push(arr1);
//arr3.push(arr2);

//let arr3=[...arr1,4,5,6,...arr2];
//console.log(arr3);

//---------------
// ex-2
//---------------
//let arr=[40,30,20,70,10];
//let maxValue=Math.max(...arr);
//console.log(maxValue);

let o1={
    x:10,
    y:20
}

let o2={
    z:30,
    x:1
}

let o3={...o2,...o1};
//console.log(o3);

// - or
let o4=Object.assign({},o2,o1);
//console.log(o4);

//-------------------
// rest vr spread
//------------------
function func(a,b,c,...mydata){  // formal argument -> rest param
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(mydata); 
}

let data=[10,20,30,40,50,60];
func(...data); // actual -> spread
//---------------------------------------




