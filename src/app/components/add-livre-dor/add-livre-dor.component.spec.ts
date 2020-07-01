import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivreDorComponent } from './add-livre-dor.component';

describe('AddLivreDorComponent', () => {
  let component: AddLivreDorComponent;
  let fixture: ComponentFixture<AddLivreDorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLivreDorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLivreDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
