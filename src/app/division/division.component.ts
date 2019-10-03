import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  firstval;
  secondval;
  result;
  constructor() { }

  ngOnInit() {
  }

  divide(){
    this.firstval=localStorage.getItem('Firstval')
    this.secondval=localStorage.getItem('SecondVal')
    this.result=+this.firstval/ +this.secondval
    localStorage.setItem('result',this.result)
  }

}
