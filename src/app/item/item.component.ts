import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from "src/app/item.service";
import { Item } from "src/models/item.model";

@Component({
  selector: 'app-car',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  item_id: number;
  item: Item;
  condition: string;

  ngOnInit(): void {(
    this.route.params.subscribe((data) => {
      this.item_id = +data.id;
      this.item = this.itemService.getItemByID(this.item_id);
      
    

      })

)}
cartlist: Array<string>;
addtocart(){
  if (localStorage.getItem("cartlist")) {
    this.cartlist = localStorage.getItem("cartlist").split(",")
    
  } else {
    this.cartlist = [];
  }
  
  // "1,2,3" -> ["1","2","3"]
  this.cartlist.push(JSON.stringify(this.item_id));

  localStorage.setItem("cartlist",this.cartlist.join(","));
}

}