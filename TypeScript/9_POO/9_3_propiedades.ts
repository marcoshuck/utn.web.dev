class Car {
  public power: number;
  public gear: number;
}

let thirdCar: Car = new Car();
console.log(thirdCar.power);
thirdCar.power = 1;
console.log(thirdCar.power);