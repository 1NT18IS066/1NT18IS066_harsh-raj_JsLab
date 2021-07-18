let a = [1,2,3,4,5]
let b = []
let s = new Set()
for(var i=0; i<a.length;i++){
    console.time('Array')
    b.push(a[i])
    console.timeEnd('Array')
    console.time('Set')
    s.add(a[i])
    console.timeEnd('Set')
}
console.time('Array')
for(i=0;i<a.length;i++){
    if(a[i]==4){
        a[i] = 100
    }
}
console.timeEnd('Array')

console.time('Set')
if(s.has(4)){
    s.delete(4)
    s.add(100)
}
console.timeEnd('Set')
console.log(a)
console.log(s)

let ob1 = {id:1, name:'Harsh'}
let ob2 = {id:2, name:'Raj'}
let st = new Set()
st.add(ob1)
st.add(ob2)
console.log(st)
