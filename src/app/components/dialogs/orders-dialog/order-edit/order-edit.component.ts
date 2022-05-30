import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';
import { Order } from '../../../../interfaces/order';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  public dataOrder : Order; 
  constructor(
    public dialogRef: MatDialogRef <OrderEditComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,
    public service:ServiceService) { 
      console.log('data',data)
      this.dataOrder = { 
        _id:data._id,   
        orderDate:data.orderDate,
        soldBy:data.soldBy,
        total:data.total,
        subtotal:data.subtotal,
        unitSalePrice:data.unitSalePrice,
        quanty:data.quanty,
        idClient:data.idClient,
        idProduct:data.idProduct,       
      }
    }

  ngOnInit(): void {
  }
  updateOrder():void{
    this.service.updateDataById(this.dataOrder,'update-order-by-id').subscribe((res:any)=>{
      console.log(res);
      if(res.correct){
        this.dialogRef.close();
      }      
    });
  }

}
