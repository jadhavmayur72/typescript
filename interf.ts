interface Rectangle{
    height:number,
    width:number

}
interface ChangeInSized extends Rectangle{

    color:string
}

interface ChangeTheColor extends ChangeInSized{

    per:boolean
}
const changeInSize: ChangeTheColor={

    height:25,
    width:35,

    color:"yellow",
    per:false


}
console.log(changeInSize)