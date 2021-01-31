import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  itemList: Array<Item>;
  cartlist: Array<string>;
  message: string;

  ngOnInit(): void {
    localStorage.getItem("cartlist")
    if (localStorage.getItem("cartlist")) {
      this.cartlist = localStorage.getItem("cartlist").split(",")
      
    } else {
      this.cartlist = [];
      this.message = "Корзина пуста! Нажмите 'В корзину' на странице товара"
    }
    this.itemList = [];
    for (var i = 0; i < this.cartlist.length; i++) {
      this.itemList.push(this.itemService.getItemByID( parseInt(this.cartlist[i])) );
    }
  
  }

}
