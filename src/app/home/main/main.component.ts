import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items = ["Foood", "Foood", "Foood", "Foood", "Foood"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
