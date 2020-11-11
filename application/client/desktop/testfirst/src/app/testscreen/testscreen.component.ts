import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-testscreen',
  templateUrl: './testscreen.component.html',
  styleUrls: ['./testscreen.component.scss'],
})
export class TestscreenComponent implements OnInit {

TestFirstEntity = {
   TestField1: '',
   TestField2: false
};

  constructor(

  ) { }

  ngOnInit() {
    
  }



}