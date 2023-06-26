/*
    1. class
    2. object
    3. encapulation
    4. abstraction
    5. inheritance
    6. polymorphism

*/

//----------------
// class  ==> instance(s)
//---------------

/*
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayName=function(){
    console.log('i am '+this.name);
    
}
var p1=new Person('abc',12);
var p2=new Person('xyz',76);

*/

//---------------
// ES-6 class
//---------------


class Person {
   
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log('i am ' + this.name);
    }
}
//var p1=new Person('abc',12);
//var p2=new Person('xyz',76);

// Inheritance 
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age); // accesss from super class Person
        this.salary = salary;
        console.log("Employee :: constructor");
    }

    saySalary() {
        console.log('i am getting ' + this.salary);
    }
    askBonus(){
        console.log('askBonus methoid in Employee class');
       // this.salary=this.salary*2;
       return this.salary*0.8;
    }

}

//let e1=new Employee('praveen',23,15000);

//e1.sayName();
//e1.askBonus();
//e1.saySalary();

class Boss extends Employee{
    /*
    note: when we r not defining constructor, default constructor alwasys exists
    */

    askBonus(){
        console.log('askBonus methoid in Boss class');
        return this.salary*0.2;
     }
}

let b1=new Boss('Raj',36,1000);
b1.askBonus();



