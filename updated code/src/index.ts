const value: number = 56;
const username: string = "Asif Ahmed Khan";
const canCode: boolean = true;
const anyValue: any = 54

// array
const values: number[] = [1,2,3,4,5]
const usernames: string[] = ["ali", "aslam", "zia"]

// tuple
let info: [string, number, boolean, string] = ["abc", 56, false, "xyz"]

//tuple array
let infos: [number, string][] = [
    [1001, "Ali"],
    [1002, "Aslam"],
    [1003, "Waseem"],
]

// enum
enum myEnum {
    "MOUSE" = 600,
    "KEYBOARD" = 800,
    "LCD" = 2500 
}

// Union
let myValue: string | number = "some value"

// object
let studentInfo: {
    id: number,
    studentName: string,
    course: string,
    semester: string
} = {
    id: 1001,
    studentName: "Rafay",
    course: "typescript",
    semester: "hdse"
}


// types
type CarType = {
    carBrand: string,
    price: number,
    color: string,
    isElectric: boolean
}

let car1: CarType = {
    carBrand: "lexus",
    price: 25000000,
    color: "black",
    isElectric: false
}

console.log(`Value is: ${value}`)
console.log(`Username is: ${username}`)

console.log(`Can Code? ${canCode}`)
console.log(`Any value: ${anyValue}`)

values.forEach( (value) => console.log(value))
usernames.forEach( (username) => console.log(username))
info.forEach( (i) => console.log(i))

console.log(myEnum.KEYBOARD)

console.log(studentInfo.course);

console.log(`Car brand is: ${car1.carBrand}. Color is: ${car1.color}. Price is: ${car1.price}.`);
