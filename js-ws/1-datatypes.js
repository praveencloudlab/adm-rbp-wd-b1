
// Data types
/*
a. simple types
----------------
1. nunber
2.string
3.boolean
4.undefined

b.complex types
---------------
1.objects : 2 types
    a. using new operator
    b. using literal styles ({})


*/

var a=100;
a="abc";
a="This is a string"+" Another string"
var s1=`
  line 1
  line 2
  line 3
  lien 4
`
isSubmited=false

/*
imp notes: in js, boolean data can be provided (false values)
    false
    undefined
    ""
    " "


*/

var b=true;

if(b){
//console.log("True");
}else{
//console.log("False");
}


var s2;
s2=977;

// objects
// new operator

var emp=new Object();

emp.id=10;
emp.name='Praveen'
emp.salary=9479744

Object.preventExtensions(emp); // will not let object to be extemded with new properties
emp.loc='Hyderabad'
Object.freeze(emp); // wil not let previous object to mofify
emp.name='James'

// b. literal style objects
// JSON => Java Script object notation:: key and value pares
/*
var product={
 "id":1024,
 "name":"Laptop",
 "price":94794,
 "description":"Dell Intel I9 16 GB RAM, 512 SSD"
}

*/

var product={
 "id":1024,
 "name":"Laptop",
 "price":94794,
 "description":"Dell Intel I9 16 GB RAM, 512 SSD",
 "category":{
    "id":1000,
    "name":"Electonics"
 },
 "reviews":4.6,
 "instock":true,
 "keywords":["Laptop","Dell","I9","16GB Ram","512 SSD"],
 "store loc":"Delhi"
}

/*
Note: Every Array by default object in js

*/

var nums=[76,54,23,64];






