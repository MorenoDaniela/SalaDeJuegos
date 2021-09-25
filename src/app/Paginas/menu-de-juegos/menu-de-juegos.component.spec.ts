import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeJuegosComponent } from './menu-de-juegos.component';

describe('MenuDeJuegosComponent', () => {
  let component: MenuDeJuegosComponent;
  let fixture: ComponentFixture<MenuDeJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDeJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDeJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
