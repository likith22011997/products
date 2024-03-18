import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pmsdetails(){
    console.log("PMS Details Page");
    }
    eldetails(){
      console.log("Equi Loan Details Page");
    }
}
