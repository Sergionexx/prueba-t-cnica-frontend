import { Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ServiceService } from '../../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientCreateComponent } from '../dialogs/client-dialog/client-create/client-create.component';
import { ClientEditComponent } from '../dialogs/client-dialog/client-edit/client-edit.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public dataClient : Client[] = [];
  public displayedColumns: string[] = ['id', 'name', 'lastname', 'phone','street','zipCode','acciones'];
  public dataSource = this.dataClient;

  constructor(
    private service:ServiceService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getClientData()
  }

  getClientData(){
    this.service.getAllData('get-all').subscribe((res:any)=>{
      console.log('res',res);
      this.dataClient = res.resp;     
      this.dataSource = this.dataClient;           
    });    
  }

  openClientCreateDialog(): void {
    const dialogRef = this.dialog.open(ClientCreateComponent,{
      width:'450px',    
    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getClientData();     
    })    
   }

   openClientEditDialog(data:any): void {
    const dialogRef = this.dialog.open(ClientEditComponent,{
      width:'450px',
      data:data

    });    
    dialogRef.afterClosed().subscribe((res:any)=>{     
      this.getClientData();     
    })    
   }

}
