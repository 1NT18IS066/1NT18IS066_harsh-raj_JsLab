let s1 = new Set()
let s2 = new Set([10,20,30,'Hello',{'a':1, 'b':2}])
console.log(s2)

console.log(s2.entries())
s1.add('1'); s1.add('2'); s1.add('3')
console.log(s1)

if(s2.has(10)){
    s2.delete(20);
}
else{
    s2.clear();
}
console.log(s2)

let a1 = [...s1]
console.log(a1)

let arr = [1,2,3,4,5,6]
let a_to_s = [...new Set(arr)]
console.log(a_to_s)

let dup = [1,1,1,2,3,4,2,2,3,5,4,3,4]
console.log(`With Duplicates the array is ${dup}`)

let s = new Set(dup)
console.log(s)

let arrset = Array.from(new Set(dup))
console.log(arrset)
