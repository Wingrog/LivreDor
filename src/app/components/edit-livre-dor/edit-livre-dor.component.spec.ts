import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLivreDorComponent } from './edit-livre-dor.component';

describe('EditLivreDorComponent', () => {
  let component: EditLivreDorComponent;
  let fixture: ComponentFixture<EditLivreDorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLivreDorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLivreDorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
