import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coordinator } from '../models/coordinator';
import { Router, RouterLink } from '@angular/router';
import { CoordinatorService } from '../services/coordinator.service';
import { Registration } from '../models/studentregistrationform';
import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-coordinatorlogin',
  imports: [FormsModule],
  templateUrl: './coordinatorlogin.component.html',
  styleUrl: './coordinatorlogin.component.css'
})
export class CoOrdinatorloginComponent {
a:Coordinator=new Coordinator()
constructor(private as:CoordinatorService, private router:Router)
{

}
submitdata()
{
this.as.login(this.a.email,this.a.password).subscribe((data)=>{
  if(data!=null)
  {
    alert("login successful")
    localStorage.setItem("cemail",this.a.email)
    this.router.navigate(['/'])
  }
  else
    alert(" invalid password or email")
  
})
}
}