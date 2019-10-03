import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
firstval;
secondval;
result;
  constructor() { }

  ngOnInit() {
  }

  addition(){
    this.firstval=localStorage.getItem('Firstval')
    this.secondval=localStorage.getItem('SecondVal')
    this.result=+this.firstval+ +this.secondval
    localStorage.setItem('result',this.result)
  }
}
