import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreDorDetailComponent } from './livre-dor-detail.component';

describe('LivreDorDetailComponent', () => {
  let component: LivreDorDetailComponent;
  let fixture: ComponentFixture<LivreDorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreDorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreDorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
