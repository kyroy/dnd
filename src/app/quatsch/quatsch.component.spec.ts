import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatschComponent } from './quatsch.component';

describe('QuatschComponent', () => {
  let component: QuatschComponent;
  let fixture: ComponentFixture<QuatschComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuatschComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuatschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
