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
var message = 'Welcome back!!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var tittle = 'codevolution';
var isBeginner = true;
var total = 0;
var name = 'PRITI';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chelsi', 23];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = 'PRITI';
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
var myvariable = 10;
if (hasName(myvariable)) {
    console.log(myvariable.name);
}
myvariable.toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(10, 20);
add(32, 45);
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: 'Priti',
    lastname: 'Mohapatra'
};
fullname(p);
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.employeename = function (name) {
        this.employeename = name;
    };
    Employee.prototype.greet = function () {
        console.log("gooooddd morning ".concat(this.employeename));
    };
    return Employee;
}());
var emp1 = new Employee('CHELSI');
console.log(emp1.employeename);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("manager delegating task");
    };
    return manager;
}(Employee));
var m1 = new manager('RAM');
m1.delegatework();
m1.greet();
console.log(m1.employeename);
