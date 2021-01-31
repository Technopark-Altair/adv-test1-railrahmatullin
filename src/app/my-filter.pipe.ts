import { Pipe, PipeTransform } from '@angular/core';
import { Item } from "src/models/item.model";

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Item): any {
        
        if (!items || !filter) {
            return items;
        }
        if (!filter.razdelName) {
            return items.filter (item =>((item.modelName.toLowerCase().indexOf(filter.modelName.toLowerCase()) !== -1 )|| (item.brandName.toLowerCase().indexOf(filter.brandName.toLowerCase()) !== -1)));       
        }
        else {
            
            return items.filter(item => (item.razdelName.toLowerCase() == filter.razdelName.toLowerCase()) && ((item.modelName.toLowerCase().indexOf(filter.modelName.toLowerCase()) !== -1 )|| (item.brandName.toLowerCase().indexOf(filter.brandName.toLowerCase()) !== -1)));
        }
    }
}