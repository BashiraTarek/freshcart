import { Pipe, PipeTransform } from '@angular/core';
import { Productt } from '../Interfaces/productt';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Productt[],term:string): Productt[] {
    
    return products.filter((product)=>product.title.toLowerCase().includes(term.toLowerCase())
    )
  }

}
