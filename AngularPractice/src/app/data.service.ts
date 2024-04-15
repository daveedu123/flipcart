import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  selectedProductId:object[]= []; // Assuming the ID is of type number

  constructor() { }

  setId(id: object) {
    this.selectedProductId.push(id);
    localStorage.setItem('cartItems',JSON.stringify(this.selectedProductId));

  }

  getId(): object[] {
    return this.selectedProductId;
  }
  
  isItemsCart(value:object):boolean {
      return this.selectedProductId.some(cartItem=>cartItem==value)
  }
  
}
