class Car {
  private model: string;
  constructor(model: string) {
    this.model = model;
  }
}

const firstCar: Car = new Car('Modelo X');
console.log(firstCar.model);