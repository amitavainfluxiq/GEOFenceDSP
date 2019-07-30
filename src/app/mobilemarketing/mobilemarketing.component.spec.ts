import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemarketingComponent } from './mobilemarketing.component';

describe('MobilemarketingComponent', () => {
  let component: MobilemarketingComponent;
  let fixture: ComponentFixture<MobilemarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilemarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
