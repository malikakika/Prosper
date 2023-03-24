import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmElementComponent } from './qcm-element.component';

describe('QcmElementComponent', () => {
  let component: QcmElementComponent;
  let fixture: ComponentFixture<QcmElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
