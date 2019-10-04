class Car {
  protected name: string;
  protected model: string;
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
console.log(ferrari.name);
// error TS2445: Property 'name' is protected and only accessible within class 'Car' and its subclasses.