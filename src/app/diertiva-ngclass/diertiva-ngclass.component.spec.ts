import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiertivaNgclassComponent } from './diertiva-ngclass.component';

describe('DiertivaNgclassComponent', () => {
  let component: DiertivaNgclassComponent;
  let fixture: ComponentFixture<DiertivaNgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiertivaNgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiertivaNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
