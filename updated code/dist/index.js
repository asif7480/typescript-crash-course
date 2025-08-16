"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value = 56;
const username = "Asif Ahmed Khan";
const canCode = true;
const anyValue = 54;
// array
const values = [1, 2, 3, 4, 5];
const usernames = ["ali", "aslam", "zia"];
// tuple
let info = ["abc", 56, false, "xyz"];
//tuple array
let infos = [
    [1001, "Ali"],
    [1002, "Aslam"],
    [1003, "Waseem"],
];
// enum
var myEnum;
(function (myEnum) {
    myEnum[myEnum["MOUSE"] = 600] = "MOUSE";
    myEnum[myEnum["KEYBOARD"] = 800] = "KEYBOARD";
    myEnum[myEnum["LCD"] = 2500] = "LCD";
})(myEnum || (myEnum = {}));
// Union
let myValue = "some value";
// object
let studentInfo = {
    id: 1001,
    studentName: "Rafay",
    course: "typescript",
    semester: "hdse"
};
let car1 = {
    carBrand: "lexus",
    price: 25000000,
    color: "black",
    isElectric: false
};
console.log(`Value is: ${value}`);
console.log(`Username is: ${username}`);
console.log(`Can Code? ${canCode}`);
console.log(`Any value: ${anyValue}`);
values.forEach((value) => console.log(value));
usernames.forEach((username) => console.log(username));
info.forEach((i) => console.log(i));
console.log(myEnum.KEYBOARD);
console.log(studentInfo.course);
console.log(`Car brand is: ${car1.carBrand}. Color is: ${car1.color}. Price is: ${car1.price}.`);
//# sourceMappingURL=index.js.map