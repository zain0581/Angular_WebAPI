import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransactionsComponent } from './addtransactions.component';

describe('AddtransactionsComponent', () => {
  let component: AddtransactionsComponent;
  let fixture: ComponentFixture<AddtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
