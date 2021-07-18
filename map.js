// Converting map into an array
const map = new Map()
map.set('milk', 50); map.set('bread', 120); map.set('jam', 50)  // Multiple entries in same line
console.log(map)
let arr = Array.from(map)
console.log(arr)

// Checking instance
let m = new Map()
console.log(m instanceof Map)
console.log(m instanceof Object)
console.log(m instanceof Set)

// Converting object to map
let ob1 = {
    id: '1', name:'Amith', phone:'123'
}
function mapcreate(ob1){
    let mp = new Map()
    Object.keys(ob1).forEach(key=>{
        mp.set(key, ob1[key]);
    });
    console.log(mp)
    console.log(mp.entries())
}
mapcreate(ob1)

// Performance analysis of map and array
console.time('Map')
map.forEach((value,key)=>{
    console.log(key, value)
});
console.timeEnd('Map')

let a = ['milk', 'bread', 'jam']
console.time('Array')
a.forEach(item=>{
    console.log(item)
})
console.timeEnd('Array')
