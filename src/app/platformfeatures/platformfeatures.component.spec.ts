import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformfeaturesComponent } from './platformfeatures.component';

describe('PlatformfeaturesComponent', () => {
  let component: PlatformfeaturesComponent;
  let fixture: ComponentFixture<PlatformfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
