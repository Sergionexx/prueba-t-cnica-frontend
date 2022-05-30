import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../../../../services/service.service';
import { Client } from '../../../../interfaces/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  public dataClient : Client; 
  constructor(
    public dialogRef: MatDialogRef <ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,
    public service:ServiceService) { 
      console.log('data',data)
      this.dataClient = {
        _id: data._id,      
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        street: data.street,
        zipCode: data.zipCode    
      }
    }

  ngOnInit(): void {
  }
  updateClient():void{
    this.service.updateDataById(this.dataClient,'update-by-id').subscribe((res:any)=>{
      console.log(res);
      if(res.correct){
        this.dialogRef.close();
      }      
    });
  }

}
