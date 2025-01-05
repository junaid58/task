import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConversionComponent } from './temp-conversion.component';

describe('TempConversionComponent', () => {
  let component: TempConversionComponent;
  let fixture: ComponentFixture<TempConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempConversionComponent]
    });
    fixture = TestBed.createComponent(TempConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
