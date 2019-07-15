import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  message: string = '';
  name:string = '';

  constructor() { }

  ngOnInit() {
  }

  SubmitForm(e) {
    console.log(e);
    this.message = 'submitted';
  }

}
