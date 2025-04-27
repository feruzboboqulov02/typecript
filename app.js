"use strict";
//  //@ts-ignore
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//  function getName(firstName:string,lastName:string):string{
//     return (`Hello ${firstName} ${lastName}`);
//  }
//  console.log(getName("John","Doe"));
//  const checkAdult=(age:number):boolean=>{
//     return age>=18?true:false;
//  }
//  console.log(checkAdult(20));
// const person = {
//     name: "feruzjon",
//     lastname: "bbklv",
//     age: 23,
//     skills: {
//         programming: "JavaScript",
//         design: "Photoshop",
//     },
// }
// function getName(data: {name:string,lastname:string}):string{
//     return(`Hello ${data.name} ${data.lastname}`);
// }
// console.log(getName(person))
// const person : [string,number,number] =['samar',23,87]
// console.log(person[0])
// console.log(person[1]) 
// const odam : (string|number)[]= ['samar',23,87] 
// enum WebSite{
//     Facebook = "https://www.facebook.com",
//     Instagram = "https://www.instagram.com",
//     Twitter = "https://www.twitter.com",
//     LinkedIn = "https://www.linkedin.com",
//     YouTube = "https://www.youtube.com",
//     TikTok = "https://www.tiktok.com",
//     Snapchat = "https://www.snapchat.com",
//     Pinterest = "https://www.pinterest.com",
//     Reddit = "https://www.reddit.com",
//     Tumblr = "https://www.tumblr.com"
// }
// let person: {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//         street: string,
//         city: string,
//         suite: string
//         zipcode: string|number,
//         geo:[number,number]
//     },
//     phone: number,
//     website: WebSite,
//     company: {
//         name: string,
//         catchPhrase: string,
//         bs: string
//     }
// } ={
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": [-37.3159,81.1496]
//     },
//     "phone": 17707368031,
//     "website": WebSite.Facebook,
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
// function prinID(id:string|number):void{
//     console.log(id);
// }
// prinID(1);
// prinID("1");
// //FUNCTION NARROWING
// function getVal(value:string|number):string|number{
//   if(typeof value === "string"){
//       return value.toUpperCase();
// }else if(typeof value === "number"){
//     return value.toFixed(2);
// }
//   return value;
// }
// console.log(getVal(1));
// console.log(getVal("1"));
// function errLog(error:{message:string}|{error:string}):void{
//     if("message" in error){
//       console.log("message"+ error.message);
//     }else{
//       console.log("error"+ error.error);
//     }
// }
// errLog({message:"message"})
// errLog({error:"error"})
// LITERAL TYPES
// let statusMessage: "success" | "error" | "loading" = "success";
// statusMessage = "error"; // valid
// statusMessage = "loading"; // valid
// // statusMessage = "completed"; // invalid, not assignable to type 'success | error | loading'
// let codes: 200 | 404 | 500 = 200; // valid
// codes = 200; // valid
// codes = 404; // valid
// codes = 500; // valid
// // codes = 300; // invalid, not assignable to type '200 | 404 | 500' 
// enum Status{
//   SUCCESS,
//   ERROR
// }
// function getStatus(statuss:Status):"success"|"error"{
//   if(statuss === Status.SUCCESS){
//       return "success"
//   }return "error"
// }
// getStatus(Status.ERROR)
// getStatus(Status.SUCCESS)
// TYPE ALIASING
//in obejcts
// type Person = {
//   firstName:string,
//   lastName: string,
//   age:number,
//   skills: string[],
// }
// const person1: Person = {
//   firstName: "john",
//   lastName: "doe",
//   age:30,
//   skills:["js","ts","react"],
// }
//in functions
// type Logger =(message:string)=>string
// const log: Logger=(message)=>{
//   return message.toUpperCase()
// }
// console.log(log("hello"));
// type Person ={
//   firstName:string,
//   lastName:string
//   wife?: Person
// }
// type personlist = Person[]
// let personList:personlist = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     wife:{
//       firstName:"jane",
//       lastName:"doe"
//     }
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith"
//   }
// ]
// type ID = string|number;
// let id:ID= "SAJDBFA"
// let id2:ID=21
// interface Inson {
//   name:string,
//   lastname:string
// }
// interface Ishchi{
//   company:string,
//   role:string
// }
// interface CompanyIshchi extends Inson,Ishchi{
//   age:number
// }
// let odamlar: CompanyIshchi[]=[
//   {
//     name:"name",
//     lastname:"lastname",
//     company:"company",
//     role:"role",
//     age:20
//   }
// ]
//index siganture
// interface Person{
//   [key:string]:string|number,
// }
// const person:Person={
//   name:"feruzjon",
//   age:23
// }
//VOID type
// function logger(text:string, callback:(message: string)=> void){
//   console.log(text);
//   callback(`logged: ${text}`);
//   }
// logger("Hello", (message)=>{
//   console.log(message);
// })
//UMKNOWN type
//NEVER type:
function throwError(message) {
    throw new Error(message);
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throwError("Error fetching data");
            }
            const data = yield response.json();
            console.log(data);
        }
        catch (error) {
            throwError("Error fetching data");
        }
    });
}
fetchData();
//NULL type
// TYPE CASTING
let msg = "Hello World";
let strength = msg.length;
let strength2 = msg.length;
console.log(strength);
console.log(strength2);
//type GUARDS
class DOG {
    bark() {
        console.log("WOOF WOOF");
    }
}
class CAT {
    meow() {
        console.log("MEOW MEOW");
    }
}
function makeSound(animal) {
    if (animal instanceof DOG) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new DOG());
makeSound(new CAT());
// type ASSERTION
function logger(number) {
    if (typeof number !== "number") {
        throw new Error("Not a number");
    }
}
logger(10);
