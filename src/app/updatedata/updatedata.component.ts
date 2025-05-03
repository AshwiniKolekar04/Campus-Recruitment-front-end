import { Component } from '@angular/core';
import { updatedataService } from '../services/updatedata.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { updatedata } from '../models/updatedata';

@Component({
  selector: 'app-updatedata',
  imports: [FormsModule,CommonModule],
  templateUrl: './updatedata.component.html',
  styleUrl: './updatedata.component.css'
})
export class UpdatedataComponent {
  view:updatedata=new updatedata();
  
  private baseUrl ='http://localhost:4200/viewdata'; 
  

constructor(private as:updatedataService,private router:Router)
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

