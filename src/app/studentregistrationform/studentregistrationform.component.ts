import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../models/studentregistrationform';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-studentregistrationform',
  imports: [FormsModule,CommonModule],
  templateUrl: './studentregistrationform.component.html',
  styleUrl: './studentregistrationform.component.css'
})
export class StudentregistrationformComponent {
  r:Registration=new Registration()
  constructor(private rs:RegistrationService)
  {

  }
  submitdata(fromRef:any)
{

  if(!fromRef.valid)
    alert("invalid data");
  else
  {
    this.rs.Register(this.r).subscribe((data)=>{
      if(data !=null){
      alert("Registration successful");
    }

});

  }
}
}
