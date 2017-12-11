import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  headers:any;
  needUpdate: EventEmitter<any> = new EventEmitter();
  urlApi:string = 'http://localhost:3001/';
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('accept', '*/*');
    this.headers = headers;
  }
  getLists(id:string = ""){
    return this.http
    .get(`${this.urlApi}lists${id}`, {headers: this.headers})
    .map(algorithm => algorithm);
  }
  excluir(id: number ){
    return this.http
    .delete(`${this.urlApi}lists/${id}`, {headers: this.headers})
    .map(algorithm => algorithm);
  }
  save(data) {
    let headers = this.headers;
    headers.append('Contenty-type', 'application/json')
    return this.http.post(`${this.urlApi}lists`, data, {headers: this.headers});
  }

}
