import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="";
  email:string="";
  password:string="";
  confirmpassword: string="";
  message: string="";

  constructor() {
   }

  ngOnInit() {

  }


  check()
  {
    this.message="";
    if(this.name=="")
    {
      this.message="name is blank";
    }else if(this.email=="")
    {
      this.message="email is blank";
    }else if(this.password=="")
    {
      this.message="password is blank";
    }else if(this.confirmpassword=="")
    {
      this.message="confirm password is blank";
    }else if(this.password != this.confirmpassword)
    {
      this.message="password and confirm password is not match";
    }else
    {
      this.message="checking successfully. Everything correct!!!";
    }
  }


  reset()
  {
    this.name="";
    this.email="";
    this.password="";
    this.confirmpassword="";
  }

}

