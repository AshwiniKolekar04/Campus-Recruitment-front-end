import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordinator } from '../models/coordinator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {

  serverurl="http://localhost:9000/coordinator"
  constructor(private http:HttpClient) { }
   login(em:any,ps:any):Observable<Coordinator>
     {
       return this.http.get<Coordinator>(this.serverurl+"/"+em+"/"+ps)
     }
}
