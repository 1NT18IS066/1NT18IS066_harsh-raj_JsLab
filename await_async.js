const one = ()=> {
    return "This is one"
}

const two = ()=> {  
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Not Accepted")
        }, 5000)
    })
}

const three = ()=> {
    return "This is three"
}

const four = ()=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("This is four")
        }, 5000)
    })
}

const display = async ()=> {
    let v2 = await two()
    console.log(v2)

    let v1 = one()
    console.log(v1)

    let v4 = await four()
    console.log(v4)

    let v3 = three()
    console.log(v3)
}

display()
