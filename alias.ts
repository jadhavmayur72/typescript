type dataType = string | number | boolean  | null


let a:dataType=465
let b:dataType="hello world"
let c:dataType=false
let d:dataType;

console.warn(a,b,c,d)




type CarYear=number
type CarModel=string
type CarType=string
type CarAbs=boolean
 type Car={
     year:CarYear,
     model:CarModel,
     type:CarType
     abs:CarAbs
 }


 const carYear:CarYear=2015
 const carModel:CarModel="Swift"
 const carType:CarType="sports"
 const absAvail:CarAbs=true

 const car:Car={
     year:carYear,
     type:carType,
     model:carModel,
     abs:absAvail
 };
 console.log(car)



 export 