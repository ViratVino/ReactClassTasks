"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "welcome back";
console.log(message);
var isBegginer = true;
var total = 0;
var name = "Virat Vino";
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["vinoth", 24];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 500] = "Red";
    Colors[Colors["Green"] = 501] = "Green";
    Colors[Colors["Blue"] = 502] = "Blue";
})(Colors || (Colors = {}));
;
var color = Colors.Blue;
console.log(color);
var sentence = "my name is ".concat(name, " I am a beginner in typeScript");
console.log(sentence);
// let myVariable:any=10;
// console.log(myVariable.name);
// myVariable="vinoth";
// myVariable.toUpperCase();
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var multiType;
multiType = 13;
multiType = "virat Vino";
// multi type give the suggestion
// let val:unknown=10;
// // console.log(val.name);
// let vino=(val as string).toLocaleUpperCase();
// console.log(vino);
function increse(num1, num2) {
    if (num2 === void 0) { num2 = 30; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
var add = increse(5);
console.log(add);
// function details(person:{firstname:string,lastname?:string}){
// console.log(`my name is ${person.firstname} ${person.lastname}`);
// }
function details(person) {
    console.log("my name is ".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "Vinoth",
    lastname: "Kumar"
};
details(p);
var Employes = /** @class */ (function () {
    function Employes(name) {
        this.employeeName = name;
    }
    Employes.prototype.greet = function () {
        console.log("Vanakam da maplaa");
    };
    return Employes;
}());
var emp1 = new Employes("Virat Vino");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managername, employeename) {
        return _super.call(this, employeename) || this;
    }
    Manager.prototype.allocateWork = function () {
        console.log("Mooditu work ah paaru da venna");
    };
    return Manager;
}(Employes));
var m1 = new Manager("vino", "priyanka");
console.log(m1.employeeName);
m1.greet();
m1.allocateWork();
