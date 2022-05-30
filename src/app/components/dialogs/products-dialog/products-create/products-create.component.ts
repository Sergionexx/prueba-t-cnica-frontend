import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  public dataProduct : any;  
  constructor(
    public dialogRef: MatDialogRef <ProductsCreateComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string,
    public service:ServiceService) { 
    this.dataProduct = {      
      UPC:"",
      proName:"",
      mfgr:"",
      model:"",
      unitListPrice:"",
      unitsInStock:""        
    }
  }

  ngOnInit(): void {
  }

  createProduct(){
    this.service.createData(this.dataProduct,'create-product').subscribe((res:any)=>{
      console.log('res create data',res);
      if(res.correct){
        this.dialogRef.close();
      }
    });
  }


}
