import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  products:any[]=[];
  students:any[]=[];
  name:string="";
  nam:string="";

  isActive:boolean=false;

  message: string="";

  constructor() {
   }

  ngOnInit() {

  }

  showName()
  {
    this.isActive=false;
  }

  showUserName()
  {
    this.isActive=true;
  }


  check()
  {
    this.message="";
    if(this.name=="")
    {

    }else if(this.nam=="")
    {
     
    }else if(this.name + this.nam){
      this.message="";
    }
  }


  reset()
  {
    this.name="";
  }

}

