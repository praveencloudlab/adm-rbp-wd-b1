console.log('--- literal-style-objects');


//----------------------
// Object
//---------------------

var p1=new Object();
p1.name='Praveen';
p1.age=76;
p1.addr='Hyderabad'
p1.city='Goa'

// -or - literal-style

//var age=87; // primitive
//var age={} ; // object 

var p2={
    name:'Tej',
    age:76,
    city:'Goa',
    address:'Hyderabad'
}

// e.g

var req_config={
    url:'http://host:1111/resourse',
    http_method:'GET',
    onSuccess: function(response){
        //--------
    }
}

//------------------------
// Array
//--------------------------

var menu1=new Array();
menu1[0]='item-1'
menu1[1]='item-2'
menu1[2]='item-3'
menu1[3]='item-4'


// - or - literal stryle
var menu2=['prod-1','prod-2','prod-3','prod-4'];

// -----------------------------
// RegExp
//------------------------------
var adharPattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");
adharPattern='1234-1234-1234';

// - or - literal-style
var adharPattern=/^IND-\d{4}-\d{4}-\d{4}$/;
var adhar='IND-1234-1234-1234';
console.log(adharPattern.test(adhar));



/*

Built in objects in JS

-> Object
-> Array
-> RegExp
-> Date
*/
















