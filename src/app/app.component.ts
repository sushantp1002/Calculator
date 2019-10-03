import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { AdditionComponent } from './addition/addition.component';
import { MulitiplicationComponent } from './mulitiplication/mulitiplication.component';
import { DivisionComponent } from './division/division.component';
import { SubstractionComponent } from './substraction/substraction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  
  title = 'Calculator';
  CalculatorForm: FormGroup;
  result: any;
  message: string;
  flag =false;
  constructor(
    private addition:AdditionComponent,
    private multiply:MulitiplicationComponent,
    private divide:DivisionComponent,
    private substractbtn:SubstractionComponent,
    private fb: FormBuilder) {
  }
  ngOnInit() {   
    this.CalculatorForm = this.fb.group({

    FirstVal:['',[Validators.required]],
    SecondVal:['',[Validators.required]],

    });
  }

  FirstVal(){
    var First:any;
    First=this.CalculatorForm.controls.FirstVal.value;
    localStorage.setItem('Firstval',First)
  }

  SecondVal(){
    var Second:any;
    Second=this.CalculatorForm.controls.SecondVal.value;
    localStorage.setItem('SecondVal',Second)
  }

  add(){
    this.addition.addition()
    this.result=localStorage.getItem('result')
    this.flag =false;
  }

  multiplybtn(){
    this.multiply.multiply()
    this.result=localStorage.getItem('result')
    this.flag =false;
  }
    
  Dividebtn(){
    if(this.CalculatorForm.controls.SecondVal.value == 0){
      this.flag =true;
      this.message = "number Cannot be devides by zero."
    }else{
      this.divide.divide()
      this.result=localStorage.getItem('result')
      this.flag =false;
    }
    
  
  }

  sub(){
    this.substractbtn.substract()
    this.result=localStorage.getItem('result')
    this.flag =false;
  }
}
