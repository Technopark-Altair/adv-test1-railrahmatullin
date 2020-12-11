import { Injectable } from '@angular/core';
import { Car } from "src/models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<Car> = [
    {id: 0, brandName: "Лада", modelName: "Седан", priceInRub: 5000000, new: true, year: 1992},
    {id: 1, brandName: "Бмв", modelName: "Х5", priceInRub: 1000000, new: false, year: 2020},
    {id: 2, brandName: "Тойота", modelName: "Приус", priceInRub: 900000, new: true, year: 2007},
    {id: 3, brandName: "Мерседес", modelName: "Бенз", priceInRub: 2000000, new: true, year: 1999},
    
  ]

  constructor() { }

  getAllCars() {
    return this.cars;
  }

  getCarByID(id) {
    return this.cars[id];
  }
}