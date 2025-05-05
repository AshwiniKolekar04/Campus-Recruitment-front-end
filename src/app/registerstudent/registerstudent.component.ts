import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../models/studentregistrationform';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registerstudent',
  imports: [CommonModule,FormsModule],
  templateUrl: './registerstudent.component.html',
  styleUrl: './registerstudent.component.css'
})
export class RegisterstudentComponent implements OnInit {
  rarr:Registration[]=[];
  constructor(private r:RegistrationService)
  {

  }
  ngOnInit(): void {
    
    this.r.getall().subscribe((data:Registration[])=>{
      if(data.length>0)
      {
        this.rarr=data
        
      }
    })
   }
}



