import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  headers
  urlApi:string = 'http://localhost:3001/';
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('accept', '*/*');
    this.headers = headers;
  }
  getLists(){
    return this.http
    .get(this.urlApi + "lists", {headers: this.headers})
    .map(algorithm => algorithm);
  }
  save(data){
    let headers = this.headers;
    headers.append('Contenty-type', 'application/json')
    return this.http.post(this.urlApi + "test", data).map(data => data).catch(data => data);
  }

}
