
// interface Person{
//     name:string,
//     age:number,
  
// }

// let heloWorld: Required<Person>={};
// heloWorld.name="mj"
// heloWorld.age=45


// console.warn(heloWorld)



interface person{
    name:string,
    age:number,
    location?:string
}
// partiall dosent force to add value to every key you have declared

let newPerson: Partial<person>={};
newPerson.name="Mayur"
newPerson.age=45

console.warn(newPerson)




const myName:Record<string,string>={
    "Mayur":"true",
    "ravi":"false"
}
console.log(myName)