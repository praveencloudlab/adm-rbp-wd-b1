//------------------------
// object de-structuring
//------------------------

let person={
    name:'Praveen',
    age:36,
    address:'Hyderabad'
}

//let pname=person.name;

//let p2={
  //  name:person.name,
    //age:person.age,
    //address:person.address
//}
//console.log(p2);

// de-structore
//let myName=person.name;
//let myAge=person.age;
//let myAddress=person.address;

// or

//let {name:myName,age:myAge,address:myAddress}=person;
//let {name:name,age:age,address:address}=person;

//let name=person.name;
//let age=person.age;
//let address=person.address;

//let {age,address,name}=person;


let employee={
    name:'Praveen',
    salary:3846455,
    project:{
        id:'P001',
        name:'Ford',
        loc:'Chennai'
    },
    address:{
        hno:'10-10',
        street:'street1',
        city:'Hyderabad',
        state:'TN',
        country:'IN',
        contact:{
            landlane:1874784,
            mobile:38674384,
            desk:84578456
        }
    },
    designation:'Software Engineer'
}


//--------------------------
// array de-strucring
//-------------------------
 let numbers=[10,20,30,40,50,60,70,80,[90,100]]

//let n1=numbers[0];
//let n2=numbers[1];
//let n3=numbers[2];
//let n4=numbers[3];

// or

let [n1,n2,n3,n4=100,n5,n6,n7,n8,[n9,n10]]=numbers;


let product={
    id:'P001',
    name:'Laptop',
    price:86000,
    store:{
        id:10,
        loc:'Hyderabad',
        stock:100
    }
}

//let {name,price}=product;

let {
    id,
    name,
    price,
    store={
        id,loc,stock
    }
}=product;


//---------------------------------------



















