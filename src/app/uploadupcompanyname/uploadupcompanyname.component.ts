import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UpcomingcompanyService } from '../services/upcomingcompany.service';
import { Upcomingcompany } from '../models/upcomingcompany';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uploadupcompanyname',
  imports: [FormsModule,CommonModule],
  templateUrl: './uploadupcompanyname.component.html',
  styleUrl: './uploadupcompanyname.component.css'
})
export class UploadupcompanynameComponent {
view:Upcomingcompany=new Upcomingcompany();
  

constructor(private as:UpcomingcompanyService,private router:Router)
{

}
submitdata()
{
  this.as.save(this.view).subscribe((data: any) => {

    if(data!=null)
    {
      alert("Company Added Successfully");
      this.router.navigate(["/"]);
    }
  })
}

}
