let numbers = [65, 43, 98, 43, 23, 76, 32, 54, 23, 43]
let s = [...new Set(numbers)];
console.log(s);
let s1 = numbers.filter((item, idx) => numbers.indexOf(item) === idx);
console.log(s1);
let s2 = numbers.reduce((unique, item) =>
    unique.includes(item) ? unique : [...unique, item], []);
console.log(s2);
//-------------------------------------------------

numbers.map((element) => {
    console.log(element);

});

emp = {
    name: 'praveen'
}

Object.preventExtensions(emp);

emp.age=98;


