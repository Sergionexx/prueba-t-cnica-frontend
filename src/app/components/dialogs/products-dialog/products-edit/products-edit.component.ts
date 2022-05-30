import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../interfaces/product';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  public dataProduct : Product; 
  constructor(
    public dialogRef: MatDialogRef <ProductsEditComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,
    public service:ServiceService) { 
      console.log('data',data)
      this.dataProduct = {
        _id:data._id,      
        UPC:data.UPC,
        proName:data.proName,
        mfgr:data.mfgr,
        model:data.model,
        unitListPrice:data.unitListPrice,
        unitsInStock:data.unitsInStock        
      }
    }

  ngOnInit(): void {
  }
  updateProduct():void{
    this.service.updateDataById(this.dataProduct,'update-product-by-id').subscribe((res:any)=>{
      console.log(res);
      if(res.correct){
        this.dialogRef.close();
      }      
    });
  }

}
