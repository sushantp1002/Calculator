import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mulitiplication',
  templateUrl: './mulitiplication.component.html',
  styleUrls: ['./mulitiplication.component.scss']
})
export class MulitiplicationComponent implements OnInit {
  firstval;
  secondval;
  result;
  constructor() { }

  ngOnInit() {
  }
  multiply(){
    this.firstval=localStorage.getItem('Firstval')
    this.secondval=localStorage.getItem('SecondVal')
    this.result=+this.firstval* +this.secondval
    localStorage.setItem('result',this.result)
  }

}
