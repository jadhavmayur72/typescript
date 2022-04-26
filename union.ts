let hello:string|number|boolean
console.log(hello="25")




function printTheCode(code:number|boolean){
    console.log(code)

}

printTheCode(true)


function check(code:string):number|string{
    return  (`${code} ` + new Date().getFullYear())
}
console.log(check("hello"))


