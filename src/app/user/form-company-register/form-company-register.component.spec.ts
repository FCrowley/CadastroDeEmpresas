import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyRegisterComponent } from './form-company-register.component';

describe('FormCompanyRegisterComponent', () => {
  let component: FormCompanyRegisterComponent;
  let fixture: ComponentFixture<FormCompanyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompanyRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
