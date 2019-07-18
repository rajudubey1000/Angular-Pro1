import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  message: string = '';
  name:string = '';
  Elements:number[]=[5,6,7,8,9,10,11,12];

  title = 'Angular 4 Project!';

  constructor() { }

  ngOnInit() {
  }

  SubmitForm(e) {
    console.log(e);
    this.message = 'submitted';
  }

}
