import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { api, environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment._url;
  constructor(private http: HttpClient) { }

  getAllData(route:string) {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'     
    });      
    return this.http.get(api(this.url,'/'+route), { headers: head });
  }

  getDataById(id:number,route:string) {
    const head = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'     
    });      
    return this.http.get(api(this.url,'/get-by-id/'+id), { headers: head });
  }
  
  createData(data: any,route:string) {    
    const body: any = data;
    const head = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(api(this.url, '/'+route), body, { headers: head });
  }

  updateDataById(data: any,route:string) {    
    const body: any = data;
    const head = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(api(this.url, '/'+route), body, { headers: head });
  }

}
