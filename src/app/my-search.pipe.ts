import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/models/item.model';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Item): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.modelName.indexOf(filter.modelName) !== -1 || item.brandName.indexOf(filter.brandName) !== -1);
    }
}