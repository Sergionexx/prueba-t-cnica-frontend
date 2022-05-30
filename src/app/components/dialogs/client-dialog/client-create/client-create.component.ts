import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  public dataClient : any;  
  constructor(
    public dialogRef: MatDialogRef <ClientCreateComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string,
    public service:ServiceService) { 
    this.dataClient = {      
      name:"",
      lastname:"",
      phone:"",
      street:"",
      zipCode:""    
    }
  }

  ngOnInit(): void {
  }

  createClient(){
    this.service.createData(this.dataClient,'create').subscribe((res:any)=>{
      console.log('res create data',res);
      if(res.correct){
        this.dialogRef.close();
      }
    });
  }

}
