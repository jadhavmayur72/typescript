var Name;
(function (Name) {
    Name[Name["rahul"] = 0] = "rahul";
    Name[Name["mayur"] = 1] = "mayur";
    Name[Name["aniket"] = 2] = "aniket";
    Name[Name["shiv"] = 3] = "shiv";
})(Name || (Name = {}));
console.warn(Name);
var Car;
(function (Car) {
    Car[Car["BMW"] = 3] = "BMW";
    Car[Car["Suzuki"] = 9] = "Suzuki";
    Car[Car["honda"] = 10] = "honda";
})(Car || (Car = {}));
var n1 = Car.honda;
// honda will take the next value of previous value declared value
console.log(n1);
console.log(Car.Suzuki);
var Char;
(function (Char) {
    Char["name"] = "Mj";
    Char["surname"] = "jadhav";
    Char[Char["age"] = 27] = "age";
})(Char || (Char = {}));
Char.age = 28;
console.log(Char);
