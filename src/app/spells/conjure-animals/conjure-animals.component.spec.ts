import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjureAnimalsComponent } from './conjure-animals.component';

describe('ConjureAnimalsComponent', () => {
  let component: ConjureAnimalsComponent;
  let fixture: ComponentFixture<ConjureAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjureAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjureAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
