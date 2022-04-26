var car = {
    type: "Car",
    wheel: 4,
    mileage: 15
};
car.wheel = 5;
car.enginesize = 1101;
//? this symbol allows to add data or key later 
// error not allowed to add data  without adding its type at line 1
console.log(car);
var bike = {
    type: "Sports",
    wheel: 2,
    mileage: 45
};
bike.wheel = 3;
// cannot change the data type of the declared key
console.log(bike);
console.log(typeof bike.wheel);
