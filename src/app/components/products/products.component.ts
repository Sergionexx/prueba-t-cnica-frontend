import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { ProductsCreateComponent } from '../dialogs/products-dialog/products-create/products-create.component';
import { ProductsEditComponent } from '../dialogs/products-dialog/products-edit/products-edit.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  public dataProducts : Product[] = [];
  public displayedColumns: string[] = [ 'UPC', 'proName', 'mfgr','model','unitListPrice','unitsInStock','acciones'];
  public dataSource = this.dataProducts;

  constructor(
    private service:ServiceService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getProductData()
  }

  getProductData(){
    this.service.getAllData('get-all-products').subscribe((res:any)=>{
      console.log('res',res);
      this.dataProducts = res.resp;     
      this.dataSource = this.dataProducts;           
    });    
  }

  openProductCreateDialog(): void {
    const dialogRef = this.dialog.open(ProductsCreateComponent,{
      width:'450px',    
    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getProductData();     
    })    
   }

   openProductEditDialog(data:any): void {
    const dialogRef = this.dialog.open(ProductsEditComponent,{
      width:'450px',
      data:data

    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getProductData();     
    })    
   }
}
