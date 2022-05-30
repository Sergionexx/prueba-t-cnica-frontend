import { Component, HostListener, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public innerWidth: any;
  public isOpened: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = event.target.innerWidth;
    this.calcSize(this.innerWidth);
  }

  @ViewChild(MatSidenav)
  public sidenav!:MatSidenav;
  
  constructor(){}
  
  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    this.calcSize(this.innerWidth);    
  }

  openSidenav():void{    
    this.sidenav.mode ='side';
    this.sidenav.open();
    this.isOpened = true;     
  }

  closeSidenav():void{
    this.sidenav.mode ='over';
    this.sidenav.close();
    this.isOpened = false;
  }

  calcSize(value:number):void{
    if(value >400){
      this.openSidenav();
    }else{
      this.closeSidenav();
    }
  }
}
