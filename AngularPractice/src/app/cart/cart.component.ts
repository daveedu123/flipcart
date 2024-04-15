import { Component ,OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  selectedProductId!: any; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Access the stored ID from the service
    //this.selectedProductId = this.dataService.getId();
    this.selectedProductId=localStorage.getItem('cartItems')
    this.selectedProductId=JSON.parse(this.selectedProductId);
  }
  removeItem(val:number):void{
    this.selectedProductId.splice(val,1)
    localStorage.setItem('cartItems',JSON.stringify(this.selectedProductId));
  }

  sortByLowToHigh() {
    this.selectedProductId.sort((a:any, b:any) => a.price - b.price); // Sort data by price in low to high order
  }

  sortByHighToLow() {
    this.selectedProductId.sort((a:any, b:any) => b.price - a.price); // Sort data by price in high to low order
  }
}
