import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAddFormatComponent } from './banner-add-format.component';

describe('BannerAddFormatComponent', () => {
  let component: BannerAddFormatComponent;
  let fixture: ComponentFixture<BannerAddFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAddFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAddFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
