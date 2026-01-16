const arr1=[1,2,3,4,5]
//console.log(arr1.slice(1,3))
const arr2=[6,7,8,9,10]
//arr3=arr1.concat(arr2)
//console.log(arr3)
//console.log(arr1.push(arr2))
const newarr=[...arr1,...arr2]
console.log(newarr)
console.log(newarr.splice(1,5))
console.log(newarr)