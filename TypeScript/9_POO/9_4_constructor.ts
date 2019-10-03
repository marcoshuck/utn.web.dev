class Car {
  public power: number;
  public gear: number;

  constructor(power: number, gear: number) {
    this.power = power;
    this.gear = gear;
  }
}

let fourthCar: Car = new Car(5, 1);
console.log(fourthCar.power);