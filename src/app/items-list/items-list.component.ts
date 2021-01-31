import { Component, OnInit } from '@angular/core';
import { ItemService } from "src/app/item.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  items = this.itemService.getAllItems();
  item_razdel = "all";
  search = "" ;

  
    ngOnInit(): void {
        this.route.params.subscribe(
          (data) => {
              this.item_razdel = data.razdel;
            
          }
        )
      };
    }
