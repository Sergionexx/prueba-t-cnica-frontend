import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { ServiceService } from '../../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderCreateComponent } from '../dialogs/orders-dialog/order-create/order-create.component';
import { OrderEditComponent } from '../dialogs/orders-dialog/order-edit/order-edit.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public dataOrders : Order[] = [];
  public displayedColumns: string[] = [ 'orderDate','soldBy','quanty','unitSalePrice','subtotal','total', 'acciones'];
  public dataSource = this.dataOrders;

  constructor(
    private service:ServiceService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getProductData()
  }

  getProductData(){
    this.service.getAllData('get-all-orders').subscribe((res:any)=>{
      console.log('res',res);
      this.dataOrders = res.resp;     
      this.dataSource = this.dataOrders;           
    });    
  }

  openOrderCreateDialog(): void {
    const dialogRef = this.dialog.open(OrderCreateComponent,{
      width:'450px',    
    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getProductData();     
    })    
   }

   openOrderEditDialog(data:any): void {
    const dialogRef = this.dialog.open(OrderEditComponent,{
      width:'450px',
      data:data

    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getProductData();     
    })    
   }

}
