let arr:any=[12]
console.warn(typeof(arr))



// Union-------------------
let data:number | string |boolean="hello world"
data=34
data=false
console.warn(data)
function check(a:number | string,b:number | string,c:boolean){
    if(typeof a ==="number" && typeof b === "number"){
        return c=true
    }
    else  if(typeof a ==="string" && typeof b === "number"){
                
        return a+b
    }
    else  if(typeof a ==="number" && typeof b === "string"){
                
        return a+b
    }
    else{
        return c=false
    }



}
console.warn(check("12",34,true))
