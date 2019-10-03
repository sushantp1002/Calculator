import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.scss']
})
export class SubstractionComponent implements OnInit {
  firstval;
  secondval;
  result;
  constructor() { }

  ngOnInit() {
  }

  substract(){
    this.firstval=localStorage.getItem('Firstval')
    this.secondval=localStorage.getItem('SecondVal')
    this.result=+this.firstval- +this.secondval
    localStorage.setItem('result',this.result)
  }
}
