import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoliciesComponent } from './add-policies.component';

describe('AddPoliciesComponent', () => {
  let component: AddPoliciesComponent;
  let fixture: ComponentFixture<AddPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
