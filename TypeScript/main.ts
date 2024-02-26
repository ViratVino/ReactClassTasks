export {}
let message="welcome back";
console.log(message);

let isBegginer:boolean=true;
let total:number=0;
let name:string="Virat Vino";

let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3]

let person1:[string,number]=["vinoth",24];
enum Colors{Red=500,Green,Blue};

let color:Colors=Colors.Blue;
console.log(color);


let sentence:string=`my name is ${name} I am a beginner in typeScript`;
console.log(sentence);


// let myVariable:any=10;
// console.log(myVariable.name);



// myVariable="vinoth";
// myVariable.toUpperCase();

let myVariable:unknown=10
function hasName(obj:any):obj is{name:string}{
    return !!obj &&
    typeof obj==="object" &&
    "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}



let multiType:number|string;
multiType=13;
multiType="virat Vino"
// multi type give the suggestion



// let val:unknown=10;
// // console.log(val.name);
// let vino=(val as string).toLocaleUpperCase();
// console.log(vino);



function increse(num1:number,num2:number=30):number{
   if(num2){
    return num1+num2;
   }else{
    return num1;
   }
}



let add=increse(5);

console.log(add);


interface Person{
  firstname:string,
  lastname:string
}

// function details(person:{firstname:string,lastname?:string}){
// console.log(`my name is ${person.firstname} ${person.lastname}`);
// }

function details(person:Person){
    console.log(`my name is ${person.firstname} ${person.lastname}`);
    }

const p={
    firstname:"Vinoth",
    lastname:"Kumar"
}



details(p);




class Employes{
     employeeName;
     constructor(name:string){
        this.employeeName=name
     }

     greet(){
        console.log("Vanakam da maplaa");
     }

}

let emp1=new Employes("Virat Vino");
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employes{
    constructor(managername:string,employeename:string){
        super(employeename);
    }
    allocateWork(){
       console.log("Mooditu work ah paaru da venna"); 
    }
}

let m1=new Manager("vino","priyanka");
console.log(m1.employeeName);
m1.greet();
m1.allocateWork();