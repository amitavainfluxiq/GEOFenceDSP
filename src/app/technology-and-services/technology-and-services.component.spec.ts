import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAndServicesComponent } from './technology-and-services.component';

describe('TechnologyAndServicesComponent', () => {
  let component: TechnologyAndServicesComponent;
  let fixture: ComponentFixture<TechnologyAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
