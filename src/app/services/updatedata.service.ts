import { Injectable } from '@angular/core';
import { updatedata } from '../models/updatedata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class updatedataService {

  serverurl="http://localhost:9000/updatedata"
  getAll: any;

  constructor(private http:HttpClient) { }

  getall():Observable<updatedata[]>
  {
    return this.http.get<updatedata[]>(this.serverurl)
  }
  save(r:updatedata):Observable<updatedata>
  {
    return this.http.post<updatedata>(this.serverurl,r)
  }
  search(i:any):Observable<updatedata>
  {
    return this.http.get<updatedata>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/"+i)
  }
  update(i:any,r:updatedata):Observable<updatedata>
  {
    return this.http.put<updatedata>(this.serverurl+"/"+i,r)
  }
  
}



