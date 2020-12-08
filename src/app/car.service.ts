import { Injectable } from '@angular/core';
import { Car } from "src/models/car.model";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  
  
  cars: Array<Car> = [
    {id: 0, brandName: "Mercedes benz", modelName: "Cls 500", priceInRub: 100000},
    {id: 1, brandName: "Mercedes benz", modelName: "Glk 2019", priceInRub: 200000},
    {id: 2, brandName: "Ferrari", modelName: "812 Superfast", priceInRub: 300000},
    {id: 3, brandName: "Range rover", modelName: "Evoque", priceInRub: 100000},
    {id: 4, brandName: "Lada", modelName: "Vesta", priceInRub: 100000},
    {id: 5, brandName: "Bmw", modelName: "i8", priceInRub: 300000},
  ]

  
  constructor() { }

  getAll() {
    return this.cars;
  }

  getCarByID(id) {
    return this.cars[id];
  }
}
