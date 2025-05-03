import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Upcomingcompany } from '../models/upcomingcompany';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingcompanyService {
  
  serverurl="http://localhost:9000/upcomingcompany"
  getAll: any;

  constructor(private http:HttpClient) { }

  getall():Observable<Upcomingcompany[]>
  {
    return this.http.get<Upcomingcompany[]>(this.serverurl)
  }
  save(r:Upcomingcompany):Observable<Upcomingcompany>
  {
    return this.http.post<Upcomingcompany>(this.serverurl,r)
  }
  search(i:any):Observable<Upcomingcompany>
  {
    return this.http.get<Upcomingcompany>(this.serverurl+"/"+i)
  }
  del(i:any):Observable<any>
  {
    return this.http.delete(this.serverurl+"/"+i)
  }
  update(i:any,r:Upcomingcompany):Observable<Upcomingcompany>
  {
    return this.http.put<Upcomingcompany>(this.serverurl+"/"+i,r)
  }
  login(em:any,ps:any):Observable<Upcomingcompany[]>
  {
    return this.http.get<Upcomingcompany[]>(this.serverurl+"/"+em+"/"+ps)
  }
}

