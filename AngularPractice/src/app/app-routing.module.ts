import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ChildComponent } from './child/child.component';
import { PracticeFileComponent } from './practice-file/practice-file.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Route for the default path
  { path: 'products', component: ProductsComponent }, // Route for '/products'
  { path:'cart',component:CartComponent},
  {path:'child',component:ChildComponent},
  {path:'practiceFile',component:PracticeFileComponent}
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
