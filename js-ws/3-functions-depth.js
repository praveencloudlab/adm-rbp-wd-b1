function display(){
    console.log(".. clicked...");
}
/*
function teach(){
    console.log(">>> teaching....");
    function learn(){
        console.log(">>> learning...");
    }

    learn();
} // end of teach function


teach();
teach();
teach();
teach();
*/

/*
function teach(){
    console.log(">>> teaching....");
    function learn(){
        console.log(">>> learning...");
    }
    return learn;
} // end of teach function

var learnFn=teach();
learnFn();
learnFn();
learnFn();
learnFn();
*/

function validateForm(){
    console.log(">> loading data from memory to be validated..");
    console.log(">> validation started....");

    function validateName(){
        console.log(">> validating name");
    }
    function validateEmail(){
        console.log(">> validating email");
    }
    return{validateEmail,validateName}
}
/*
validationObj=validateForm();
validationObj.validateName();
validationObj.validateEmail();
*/

var{validateName,validateEmail}=validateForm(); // ES6 : destrucure 
validateName();
validateEmail();

emp={
    ename:'Praveen',
    age:87,
    address:'London'
}

var{ename,age,address}=emp;
console.log(ename);


var btn2=document.getElementById('b1');
var btn3=document.getElementById('b2');

btn2.addEventListener(('click'),function(){
    console.log(">> Button 2 clicked...");
});

btn3.addEventListener('click',function(){
    console.log(">> Button 3 clicked...");
});



