import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataPartnerIntegrationComponent } from './big-data-partner-integration.component';

describe('BigDataPartnerIntegrationComponent', () => {
  let component: BigDataPartnerIntegrationComponent;
  let fixture: ComponentFixture<BigDataPartnerIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDataPartnerIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataPartnerIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
