import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:any[]=[ ];
  name:string="";

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
    }else
    {
      this.students.push(this.name);
      this.message="checking successfully. Everything correct!!!";
    }
  }


  reset()
  {
    this.name="";
  }

}
