// let value: number = 5;
// console.log(value);


// basic types
let id: number = 5;
let company: string = "AA Solution";
let x: any = "value of any data type";

// arrays
let ids: number[] = [1,2,3,4];
let arr: any[] = [1, true, "str value"];

// tuple
let person: [number, string, boolean] = [1, "Abc", true];

// tuple array
let employee: [number, string][]
employee = [
    [1, "emp1"],
    [2, "emp2"],
    [3, "emp3"]
]

// Union
let productId: number | string

productId = 22;

// Enum: Allow us to define a set of named constants
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Left);

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Direction2.Left);

// Objects

const user : {
    id: number,
    name: string,
    language: string
} = {
    id: 1,
    name: "abc",
    language: "ts",
}

// type
type Car = {
    carId: number,
    carName: string
}
const car: Car = {
    carId: 1001,
    carName: "Audi"
}

// Type assertion
let Cid: any = 1;
// let customerId = <number>Cid
let customerId = Cid as number

// customerId = true


// Functions
function add(n1: number, n2: number): number{
    return n1 + n2
}

console.log(add(4,2));


function log(message: string | number): void{
    console.log(message);
}

log("Asif")

// interfaces: It is like a custom type or specifc structure to an object or function
interface PersonInterface {
    readonly id: number
    name: string
    age?: number
}

const person1: PersonInterface = {
    id: 1,
    name: "xyz",
    age: 12
}

// a type can be used with primitives as well as unions

// type Example = number | string

// let ex1: Example = 12;

// interface cannot used with primitives and unions

// interface ExampleInterface = number | string

// Interfaces with functions

interface MathFuncInterface {
    (x: number, y: number): number
}

const subtract: MathFuncInterface = (v1: number, v2: number): number => v1 - v2;
const multiply: MathFuncInterface = (v1: number, v2: number): number => v1 * v2;

// Classes
class Person{
    id: number
    private name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is registered.`
    }
}

let p1 = new Person(1001, "Waleed")
let p2 = new Person(1002, "Aslam")

// p1.name = "Asif"
console.log(p1.register());
console.log(p2);

// Classes with interface

interface BankInterface{
    AccountTitle: string,
    AccountBalance: number,
    withdraw(amount: number): number
    deposit(amount: number): number
}

class Bank implements BankInterface{
    AccountTitle: string
    AccountBalance: number

    constructor(title: string, balance: number){
        this.AccountTitle = title
        this.AccountBalance = balance
    }
    withdraw(amount: number): number {
        return this.AccountBalance - amount
    }
    deposit(amount: number): number {
        return this.AccountBalance + amount
    }
}

let b1 = new Bank("Asif Ahmed Khan", 25000)

console.log(b1.withdraw(5000))

// Inheritance 

interface UserInterface{
    username: string;
    gender: string
    Info(): string
}

class User implements UserInterface{
    username: string
    gender: string

    constructor(username: string, gender: string){
        this.username = username
        this.gender = gender
    }

    Info(){
        return `Username is: ${this.username} and gender is: ${this.gender}`
    }
}

interface SocialMediaUserInterface{
    socialMediaPlatform: string
    Info(): string
}
class SocialMediaUser extends User{
    socialMediaPlatform: string

    constructor(username: string, gender: string, socialMedia: string){
        super(username, gender)
        this.socialMediaPlatform = socialMedia
    }

    override Info(){
        return `Username is: ${this.username}, Gender is: ${this.gender} and social media is: ${this.socialMediaPlatform}`
    }
}
let u1 = new User("user1", "male")
console.log(u1.Info());

let su1 = new SocialMediaUser("Xyz", "male", "LinkedIn")
console.log(su1.Info());


// Generic 

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(["one", "two", "three"])

numArr.push(22)