import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },//canActivate: [AuthGuard, AdminGuard]
  { path: 'clients', component: ClientsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
