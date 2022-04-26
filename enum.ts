enum Name{
    "rahul","mayur", "aniket","shiv"
}
console.warn(Name)

enum Car {
    BMW=3,
    Suzuki=9,
    honda
}
let n1=Car.honda
// honda will take the next value of previous value declared value
console.log(n1)
console.log(Car.Suzuki)


enum Char{
    name="Mj",
    surname="jadhav",
    age=27
}
// Char.age=28
// cannot change the value as it is a read-only property
console.log(Char)