import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInstructeurComponent } from './interface-instructeur.component';

describe('InterfaceInstructeurComponent', () => {
  let component: InterfaceInstructeurComponent;
  let fixture: ComponentFixture<InterfaceInstructeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceInstructeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceInstructeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
