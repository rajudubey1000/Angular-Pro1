import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string="";
  marks:number;
  address:string="";

  constructor() {
   }

  ngOnInit() {

    this.name="";
    this.address="";
    this.marks= 1;

    //alert(this.name + this.marks);
  }


  show()
  {
    alert(this.address);
  }

}

