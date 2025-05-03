import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  serverurl="http://localhost:9000/student"
  constructor(private http:HttpClient) { }
   login(em:any,ps:any):Observable<Student>
     {
       return this.http.get<Student>(this.serverurl+"/"+em+"/"+ps)
     }
}
