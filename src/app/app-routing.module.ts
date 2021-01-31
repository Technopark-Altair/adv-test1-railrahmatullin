import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { ItemComponent } from "./item/item.component";
import { ItemsListComponent } from "./items-list/items-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";


  const routes: Routes = [
    { path: "cart", component: CartListComponent},
    { path: "", component: ItemsListComponent},
    { path: "item/:id", component: ItemComponent},
    { path: ":razdel", component: ItemsListComponent},
    { path: "**", component: NotFoundComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
