export{}
let message='Welcome back!!';
console.log(message);

let x =10;
const y=20;

let sum;
const tittle ='codevolution';

let isBeginner  : boolean = true;
let total : number = 0;
let name : string = 'PRITI';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);

let n : null =null;
let u : undefined =undefined;

let list1: number[] =[1,2,3];
let list2: Array<number> =[1,2,3];

let person1: [string, number] =['Chelsi',23];
enum color {Red, Green, Blue};
 let c: color =color.Green;
 console.log(c);

 let randomvalue: any =10;
 randomvalue = true;
 randomvalue ='PRITI';
 function hasName(obj: any): obj is { name: string} {
    return !!obj &&
         typeof obj=== "object" &&
         "name" in obj
}
let myvariable: any =10;

if (hasName(myvariable)) {
   
 console.log(myvariable.name); 
}
( myvariable as string).toUpperCase();

let a;
a =10;
a =true;

let b=20;

let multiType: number | boolean;
multiType =20;
multiType =true;

let anyType: any;
anyType =20;
anyType =true;

function add(num1: number, num2?:number): number {
    if(num2)

    return num1 + num2;
    else 
    return num1;
}
add(10,20);
add(32,45);

interface person {
    firstname: string;
    lastname?: string;   
}
  function fullname(person:person) {
    console.log(`${ person.firstname} ${ person.lastname}`);
  }
 let p = {
    firstname: 'Priti',
    lastname: 'Mohapatra'
 };
fullname(p);
 
 
class Employee {
    emp :string= '';
    constructor(xyz : string) {

    }
    
    public employeeName(name: string) {
        this.emp = name;

    }
    greet() {
        console.log(`gooooddd morning ${ this.employeeName}`);

    }
}
let emp1 = new Employee('KRISHNA');

console.log(emp1.employeeName);
emp1.greet();

class manager extends Employee {
    constructor(managerName: string) {
        super (managerName) ;

    }
    delegatework() {
        console.log(`manager delegating task`)
    }

} 
 let m1 = new manager('RAM');
 m1.delegatework();
 m1.greet();
 console.log(m1.employeeName);






