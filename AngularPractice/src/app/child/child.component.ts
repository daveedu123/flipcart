import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'] // Corrected property name
})

 
export class ChildComponent {
  // result:any;
  // constructor(private _http:HttpClient){
  // }
  
  // cardNumber: string = '1111 2222 3333';
  // cardHolder: string = 'John Doe';
  // expirationDate: string = '10-22-2023';

  // api(): void {
  //   const res = this._http.get('https://jsonplaceholder.typicode.com/photos?_limit=1000').subscribe(data => {
  //       console.log(data)
  //       this.result=data;
  //     // Move this line inside the subscription callback
  //   });
  // }
  

  numbers: number[] = [];
  multipliers: number[] = [];
  tables: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.numbers = this.generateNumbers(13, 13);
    this.multipliers = this.generateNumbers(1, 20);
    this.tables = this.generateNumbers(1, 1);
  }

  generateNumbers(start: number, end: number): number[] {
    const numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}