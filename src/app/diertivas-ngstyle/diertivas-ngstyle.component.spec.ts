import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiertivasNgstyleComponent } from './diertivas-ngstyle.component';

describe('DiertivasNgstyleComponent', () => {
  let component: DiertivasNgstyleComponent;
  let fixture: ComponentFixture<DiertivasNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiertivasNgstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiertivasNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
