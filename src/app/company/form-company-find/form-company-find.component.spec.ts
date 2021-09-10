import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyFindComponent } from './form-company-find.component';

describe('FormCompanyFindComponent', () => {
  let component: FormCompanyFindComponent;
  let fixture: ComponentFixture<FormCompanyFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCompanyFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
