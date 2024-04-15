import { Component, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  constructor(private _http: HttpClient,private router:Router,private dataService: DataService) {
    this.getData();
  }
// retriving the data
  data = null;
  getData() {
    return this._http.get("https://fakestoreapi.com/products?")
      .subscribe((response: any) => {
        this.data = response;
        console.log(response);
      });
  }
  
  cartdir():void{
    this.router.navigate(['/cart']);
  }
  


  idgenerator(value:object):void{
    if(!this.dataService.isItemsCart(value)){
      this.dataService.setId(value);
    }
  } 


  search(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log('Search term:', searchTerm);
    // Implement your search logic here
    console.log(this)
  }
}
