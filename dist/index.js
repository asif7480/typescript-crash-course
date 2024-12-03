"use strict";
// let value: number = 5;
// console.log(value);
// basic types
let id = 5;
let company = "AA Solution";
let x = "value of any data type";
// arrays
let ids = [1, 2, 3, 4];
let arr = [1, true, "str value"];
// tuple
let person = [1, "Abc", true];
// tuple array
let employee;
employee = [
    [1, "emp1"],
    [2, "emp2"],
    [3, "emp3"]
];
// Union
let productId;
productId = 22;
// Enum: Allow us to define a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// Objects
const user = {
    id: 1,
    name: "abc",
    language: "ts",
};
const car = {
    carId: 1001,
    carName: "Audi"
};
// Type assertion
let Cid = 1;
// let customerId = <number>Cid
let customerId = Cid;
// customerId = true
// Functions
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(4, 2));
function log(message) {
    console.log(message);
}
log("Asif");
const person1 = {
    id: 1,
    name: "xyz",
    age: 12
};
const subtract = (v1, v2) => v1 - v2;
const multiply = (v1, v2) => v1 * v2;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered.`;
    }
}
let p1 = new Person(1001, "Waleed");
let p2 = new Person(1002, "Aslam");
// p1.name = "Asif"
console.log(p1.register());
console.log(p2);
class Bank {
    constructor(title, balance) {
        this.AccountTitle = title;
        this.AccountBalance = balance;
    }
    withdraw(amount) {
        return this.AccountBalance - amount;
    }
    deposit(amount) {
        return this.AccountBalance + amount;
    }
}
let b1 = new Bank("Asif Ahmed Khan", 25000);
console.log(b1.withdraw(5000));
class User {
    constructor(username, gender) {
        this.username = username;
        this.gender = gender;
    }
    Info() {
        return `Username is: ${this.username} and gender is: ${this.gender}`;
    }
}
class SocialMediaUser extends User {
    constructor(username, gender, socialMedia) {
        super(username, gender);
        this.socialMediaPlatform = socialMedia;
    }
    Info() {
        return `Username is: ${this.username}, Gender is: ${this.gender} and social media is: ${this.socialMediaPlatform}`;
    }
}
let u1 = new User("user1", "male");
console.log(u1.Info());
let su1 = new SocialMediaUser("Xyz", "male", "LinkedIn");
console.log(su1.Info());
// Generic 
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["one", "two", "three"]);
numArr.push(22);
