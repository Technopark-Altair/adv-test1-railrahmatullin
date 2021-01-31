import { Injectable } from '@angular/core';
import { Item } from "src/models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<Item> = [
    {id: 0, razdelName: "men", brandName: "Nike", modelName: "Штаны", priceInRub: 1500, pictureName: "assets/Rebel_55749401_darkgrey_hi-res.jpg" },
    {id: 1, razdelName: "men", brandName: "Nike", modelName: "Кепка", priceInRub: 900, pictureName: "assets/nike-sb-performance-trucker-hat-black-white-x1.1506666536.jpg" },
    {id: 2, razdelName: "men", brandName: "Nike", modelName: "Футболка", priceInRub: 1400, pictureName: "assets/Nike-SB-DFC-Logo-T-Shirt-Obsidian.jpg" },
    {id: 3, razdelName: "men", brandName: "Nike", modelName: "Носки", priceInRub: 500, pictureName: "assets/594d09aa1ce5d.jpg" },
    {id: 4, razdelName: "men", brandName: "Adidas", modelName: "Шорты", priceInRub: 1400, pictureName: "assets/dpgm0012160b.jpeg" },
    {id: 5, razdelName: "men", brandName: "Adidas", modelName: "Футболка", priceInRub: 1400, pictureName: "assets/8e803252-e21d-45d0-aef6-9858c4ee4841.jpg" },
    {id: 6, razdelName: "men", brandName: "Nike", modelName: "Кроссовки", priceInRub: 4000, pictureName: "assets/Nike 1.jpeg" },
    {id: 7, razdelName: "men", brandName: "Nike", modelName: "Футболка", priceInRub: 1400, pictureName: "assets/1146207_3.jpg" },
    {id: 8, razdelName: "men", brandName: "Nike", modelName: "Кроссовки", priceInRub: 1400, pictureName: "assets/Air Jordan Nike AJ I 1 Retro High OG 'Chicago Crystal' (Origin Story)__555088-602.jpg" },
    {id: 9, razdelName: "women", brandName: "Adidas", modelName: "Шорты", priceInRub: 1000, pictureName: "assets/adidas-originals-tape.jpg" },
    {id: 10, razdelName: "women", brandName: "Nike", modelName: "Штаны", priceInRub: 1500, pictureName: "assets/b3ba4f60cd031470e3937823c0f72ae9.jpeg" },
    {id: 11, razdelName: "women", brandName: "Nike", modelName: "Сланцы", priceInRub: 1000, pictureName: "assets/20b1d8fbc2c02aab086c33ca77b31b22.jpg" },
    {id: 12, razdelName: "women", brandName: "Nike", modelName: "Кроссовки", priceInRub: 2000, pictureName: "assets/x_large_3x.jpg" },
    {id: 13, razdelName: "child", brandName: "Adidas", modelName: "Штаны", priceInRub: 1000, pictureName: "assets/1023506551.jpg" },
    {id: 14, razdelName: "child", brandName: "Nike", modelName: "Футболка", priceInRub: 1000, pictureName: "assets/ea0b4b5caac36c2d35ddf5cd5e147e64_1000_1000.jpg" },
    {id: 15, razdelName: "child", brandName: "Adidas", modelName: "Футболка", priceInRub: 1000, pictureName: "assets/futbolka_detskaya_community_t_shirt_judo_kids_sine_belaya_pic1.jpg" },
    

    
  ]

  constructor() { }

  getAllItems() {
    return this.items;
  }

  getItemByID(id) {
    return this.items[id];
  }
}