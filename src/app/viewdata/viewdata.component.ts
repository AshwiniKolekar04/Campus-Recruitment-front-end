import { Component, OnInit } from '@angular/core';
import { Upcomingcompany } from '../models/upcomingcompany';
import { UpcomingcompanyService } from '../services/upcomingcompany.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  imports: [CommonModule,RouterLink],
  templateUrl: './viewdata.component.html',
  styleUrl: './viewdata.component.css'
})
export class ViewdataComponent implements OnInit {
  varr:Upcomingcompany[]=[]
  constructor(private as:UpcomingcompanyService)
  {

  }
  ngOnInit(): void {
    
    this.as.getall().subscribe(data=>{
      if(data.length>0)
      {
        this.varr=data
        
      }
    })
   }
}
