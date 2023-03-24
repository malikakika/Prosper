import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionlicenseComponent } from './gestionlicense.component';

describe('GestionlicenseComponent', () => {
  let component: GestionlicenseComponent;
  let fixture: ComponentFixture<GestionlicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionlicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
