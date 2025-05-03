import { Component, OnInit } from '@angular/core';
import { updatedata } from '../models/updatedata';
import { updatedataService } from '../services/updatedata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentviewdata',
  imports: [CommonModule],
  templateUrl: './studentviewdata.component.html',
  styleUrl: './studentviewdata.component.css'
})
export class studentviewdataComponent implements OnInit {
  uarr:updatedata[]=[]
  constructor(private as:updatedataService)
  {

  }
  ngOnInit(): void {
   
    this.as.getall().subscribe(data=>{
      if(data.length>0)
      {
        this.uarr=data
        
      }
    })
   }
}
