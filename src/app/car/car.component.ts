import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from "src/app/car.service";
import { Car } from "src/models/car.model";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  car_id: number;
  car: Car;
  condition: string;

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.car_id = +data.id;
      this.car = this.carService.getCarByID(this.car_id);
      if (this.car.new) {
        this.condition = "Новая";
      } else {
        this.condition = "Б/У";
      }

    }

  )};}