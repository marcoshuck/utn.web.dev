class Car {
  public engine: Engine;
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