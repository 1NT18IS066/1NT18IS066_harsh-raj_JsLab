// Converting object to map
let obj = {
    id: 1, name: 'harsh', phone: 89537489573 
}
let arr = Object.entries(obj)
let map = new Map(arr)
console.log(map)

// Converting map to object
let m1 = new Map([['a',1], ['b',2], ['c',3]])
let a = m1.entries()
let newobj = Object.fromEntries(a)
console.log(m1)
console.log(newobj)

// Performance analysis of map and object
console.time('Object')
for(const key in obj){
    if(`${key}` == 'id')
    console.log(`${obj[key]}`)
}
console.timeEnd('Object')

console.time('Map')
map.forEach((value,key)=>{
    if(key=='id')
    console.log(value)
})
console.timeEnd('Map')
