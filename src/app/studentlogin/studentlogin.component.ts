import { Component } from '@angular/core';
import { Student } from '../models/student';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentlogin',
  imports: [FormsModule],
  templateUrl: './studentlogin.component.html',
  styleUrl: './studentlogin.component.css'
})
export class StudentloginComponent {
  a:Student=new Student()
constructor(private as:StudentService, private router:Router)
{

}
submitdata()
{
this.as.login(this.a.email,this.a.password).subscribe((data)=>{
  if(data!=null)
  {
    alert("login successful")
    localStorage.setItem("semail",this.a.email)
    this.router.navigate(['/'])
  }
  else
    alert(" invalid password or email")
  
})
}
}
