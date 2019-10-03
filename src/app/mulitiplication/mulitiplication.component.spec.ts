import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulitiplicationComponent } from './mulitiplication.component';

describe('MulitiplicationComponent', () => {
  let component: MulitiplicationComponent;
  let fixture: ComponentFixture<MulitiplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulitiplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulitiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
