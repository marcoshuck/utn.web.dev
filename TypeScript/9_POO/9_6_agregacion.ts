class Car {
  public engine: Engine;
  public stereo?: Stereo;

  constructor() {
    this.engine = new Engine(100);
  }
}

class Engine {
  public power: number;
  public started: boolean;

  constructor(power: number) {
    this.power = power;
    this.started = false;
  }
}

class Stereo {
  public trademark: string;
  public mode: number;
}

function main() {
  let car: Car = new Car();
  let stereo: Stereo = new Stereo();
  stereo.trademark = "Panasonic";
  stereo.mode = 1;
  console.log(car);
  car.stereo = stereo;
  console.log(car);
}
main();