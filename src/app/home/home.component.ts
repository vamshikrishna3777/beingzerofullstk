import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:String ="random vamshi";
  constructor() { }

  ngOnInit() {
    this.x=this.x+" vysh";
  }
  fnclick()
  {
    this.x=this.x+" sne..";
  }

}
