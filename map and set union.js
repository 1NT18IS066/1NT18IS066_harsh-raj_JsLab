let m1 = new Map([['a',1], ['b',2], ['c',3]])
let m2 = new Map([['d',4], ['e',5], ['f',6]])

let conmap = new Map([...m1].concat([...m2]))
console.log(conmap)

let s1 = new Set([1,2,3])
let s2 = new Set(['a','b','c'])
let set = new Set([...s1, ...s2])
console.log(set)
