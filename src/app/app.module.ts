import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ClientCreateComponent } from './components/dialogs/client-dialog/client-create/client-create.component';
import { ClientEditComponent } from './components/dialogs/client-dialog/client-edit/client-edit.component';
import { OrderCreateComponent } from './components/dialogs/orders-dialog/order-create/order-create.component';
import { OrderEditComponent } from './components/dialogs/orders-dialog/order-edit/order-edit.component';
import { ProductsCreateComponent } from './components/dialogs/products-dialog/products-create/products-create.component';
import { ProductsEditComponent } from './components/dialogs/products-dialog/products-edit/products-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProductsComponent,
    OrdersComponent,
    SidebarComponent, 
    ClientCreateComponent,
    ClientEditComponent,
    OrderCreateComponent,
    OrderEditComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
