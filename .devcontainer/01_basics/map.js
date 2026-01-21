const map=new Map();
map.set('1',"Udit");
map.set('2',"Yuvraj");
map.set('3',"Om");
// console.log(map);
// console.log(map.size);
// for(const [key,value] of map){
//     console.log(key,':-',value);
//}

//can't use 'for in'  in maps
// for(const keys in map){
//     console.log(keys);
// }

const myobj={
    1:'a',
    2:'b',
    3:'c',
    4:'d'
}

// for(const keys in myobj){
//     console.log(keys); 
//     console.log(myobj[keys]);
// }

//cant use 'for of' in objects
// for(const [keys,values] of myobj){
//     console.log(keys); 
//     console.log(keys,':-',values);
// }