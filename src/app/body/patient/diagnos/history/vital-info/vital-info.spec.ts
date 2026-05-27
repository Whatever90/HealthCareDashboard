import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalInfo } from './vital-info';

describe('VitalInfo', () => {
  let component: VitalInfo;
  let fixture: ComponentFixture<VitalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(VitalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
