import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAeropuertoComponent } from './banner-aeropuerto.component';

describe('BannerAeropuertoComponent', () => {
  let component: BannerAeropuertoComponent;
  let fixture: ComponentFixture<BannerAeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAeropuertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
