import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  usertype="guest"
  constructor(private router:Router)
  {

  }
  ngOnInit(): void {
    this.router.events.subscribe(()=>
      {
    if(localStorage.getItem("cemail")!=null)
    {
       this.usertype="coordinator"
    }
    else if(localStorage.getItem("semail")!=null)
    {
      this.usertype="student"
    }
   else
   this.usertype="guest"
  })
}
clogout()
{
  localStorage.removeItem("cemail")
this.router.navigate(["/"])
}
slogout()
{
  localStorage.removeItem("semail")
  this.router.navigate(["/"])
}



}
