//const user=new Object()->same as 
// const user={}
// console.log(user)
// user.name="Udit Saha"
// user.age=19
// user.id=20253305
// console.log(user)
// const obj={
//     email:"udi@google.com",
//     details:{
//         name:{
//             firstname:"Udit",
//             lastname:"Saha"
//         }
//     }
// }
// console.log(obj.email)
// console.log(obj.details.name.lastname)
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)
// console.log(obj1)
// console.log(obj1===obj3)

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
// console.log(obj1)
// console.log(obj1===obj3)

// const obj3={...obj1,...obj2}
// console.log(obj3)

const details={
    user:"Udit Saha",
    age:19,
    id:"udit@gmail.com"
}
// console.log(details)
// console.log(Object.keys(details))
// console.log(Object.values(details))
// console.log(Object.entries(details))
// console.log(details.hasOwnProperty('number'))

//the deconstructing of the object
// const {user:u}=details
// console.log(u)
const {user}=details
console.log(user)


