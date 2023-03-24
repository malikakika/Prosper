import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionqcmComponent } from './gestionqcm.component';

describe('GestionqcmComponent', () => {
  let component: GestionqcmComponent;
  let fixture: ComponentFixture<GestionqcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionqcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
