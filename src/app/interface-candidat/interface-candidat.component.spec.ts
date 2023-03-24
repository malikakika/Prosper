import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceCandidatComponent } from './interface-candidat.component';

describe('InterfaceCandidatComponent', () => {
  let component: InterfaceCandidatComponent;
  let fixture: ComponentFixture<InterfaceCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
