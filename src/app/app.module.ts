import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MyFilterPipe } from './my-filter.pipe';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule }from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    NotFoundComponent,
    MyFilterPipe,
    CartListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
