class Car {
  public name: string;
  public model: string;
  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }
}

class Ferrari extends Car {
  constructor(model: string) {
    super('Ferrari', model);
  }
}

const ferrari: Ferrari = new Ferrari('XZ1');
console.log(ferrari);