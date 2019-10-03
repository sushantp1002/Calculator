import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { MulitiplicationComponent } from './mulitiplication/mulitiplication.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { DivisionComponent } from './division/division.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    MulitiplicationComponent,
    SubstractionComponent,
    DivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AdditionComponent,MulitiplicationComponent,SubstractionComponent,DivisionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
