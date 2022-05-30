import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class OrderCreateComponent implements OnInit {

  public dataOrder : any;  
  constructor(
    public dialogRef: MatDialogRef <OrderCreateComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string,
    public service:ServiceService) { 
    this.dataOrder = {      
      orderDate:"",
      soldBy:"",
      total:"",
      subtotal:"",
      unitSalePrice:"",
      quanty:"",
      idClient:"",
      idProduct:"",       
    }
  }

  ngOnInit(): void {
  }

  createOrder(){
    this.service.createData(this.dataOrder,'create-order').subscribe((res:any)=>{
      console.log('res create data',res);
      if(res.correct){
        this.dialogRef.close();
      }
    });
  }


}
