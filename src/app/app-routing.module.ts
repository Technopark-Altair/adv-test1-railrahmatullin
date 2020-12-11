import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from "./car/car.component";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";


  const routes: Routes = [
    { path: "", component: CarsListComponent},
    { path: "car/:id", component: CarComponent},
    { path: "**", component: NotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
