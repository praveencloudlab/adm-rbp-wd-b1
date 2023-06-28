// arrow functions
/** 
function f1(){
    console.log("Hello world!");
}
f1();

const f2=()=>console.log("I am f2 function!");
f2();
const disp=()=>{
    console.log("line 1");
    console.log('line 2');
}

disp();

let sum=(a,b)=>a+b;
console.log(sum(65,43));
let r1=sum(100,200);


// let and const keywords
// issue with block scope with var keyword

var count=0;
if(true){
    var count=1;
    console.log(count); // 1
}
console.log(count); //1 


let count=0;
if(true){
  let count=1;
    console.log(count); //1
}
console.log(count); //0


// const keyword
const PI=3.14;
//PI=65.42; invalid statement

// template literals

// ES5
//var name='John';
//var message='Hello, '+name;
// ES6
const name='Praveen'
const message=`Hello, ${name}`


// Default Parameters
function multiply(x=1,y=1){
    console.log(x*y);
}

multiply(10,2);


// Destructuring
//let emp={id:140,name:'Praveen',message:'Good job'};

//console.log(emp.id); //
//console.log(emp.name);
//console.log(emp.message);

// es6
//let{id}=emp;
//let{name}=emp;
//let{message}=emp;
//let{message,id,name}=emp;
//console.log(id);
//console.log(name);
//console.log(message);

var numbers=[13,22,322];
//var a=numbers[0]
//var b=numbers[1]
//var c=numbers[2]

// es6
//const[a,b,c]=numbers;

    let emp={
             id:140,
             name:'Praveen',
             message:'Good job',
             dept:{
                id:1000,
                name:'HR',
                loc:'Chennai'
             }
            }



    let{dept}=emp;
    let{id,name,loc}=dept;


//console.log(dept);


// spread operator
const arr1=[1,2,3];
const arr2=[10,20,...arr1,87,43];
console.log(arr2);

const sum=function(a,b,...numbers){
    let s=0;
    console.log(a+' and '+b);
    numbers.forEach(num=>s=num+s)
    return s;
}
*/

// classes in es6

//Es5
function Test(){ // test is class
    function f1(){
        console.log("f1 function");
    }  
    f1();
}

 //t=new Test();
 //t.f1();

//es6
class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

     disp(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);
    }
}
e1=new Employee(10,'Praveen',836843);

// map
// filter
// find
// foreach
// notin
// contains
// having


