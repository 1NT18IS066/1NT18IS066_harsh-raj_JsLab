let myself = "harsh"

let p = new Promise( (onSucess, onFailed)=>{
    if(me == "harsh"){
        onSucess("Name is " + myself)
    }
    else{
        onFailed("Name is not " + myself)
    }
})

console.log(p)

p.then( (msg)=>{
    console.log("Success!")
}).catch( (msg)=>{
    console.log("Failed")
})
