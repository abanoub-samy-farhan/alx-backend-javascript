export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.time]() {
    return this;
  }

  cloneCar() {
    const NewCar = this.constructor[Symbol.specie];
    return new NewCar();
  }
}